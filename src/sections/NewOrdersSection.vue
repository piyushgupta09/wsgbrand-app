<template>
    <div class="font-title">
        <OrderFilters
            :title="title"
            :filters="filters"
            :parties="parties"
            :statuses="statuses"
            @order-filter-updated="handleFiltersChange" 
        />

        <OrderTabs v-if="prefix === 'brand'" :links="links"/>

        <div v-if="Object.keys(orders).length">
            <div v-for="(order, orderIndex) in orders" :key="orderIndex">
                <ul class="list-group list-group-flush">
                    <OrderCard :order="order" :type="prefix" />
                </ul>
            </div>
        </div>
        <EmptyList v-else title="No Orders Available, try adjusting filters" />
        <OrderDetails :orders="orders"  :type="prefix" />
    </div>
</template>

<script>
import Axios from '@/services/axios';
import EmptyList from '@/components/EmptyList.vue';
import OrderCard from '@/components/OrderCard.vue';
import OrderTabs from '@/components/OrderTabs.vue';
import OrderFilters from '@/components/OrderFilters.vue';
import OrderDetails from '@/components/OrderDetails.vue';

export default {
    name: 'NewOrdersSection',
    props: {
        module: {
            type: String,
            required: true,
        },
        links: {
            type: Array,
            required: true,
        },
    },
    components: {
        OrderCard,
        EmptyList,
        OrderTabs,
        OrderDetails,
        OrderFilters,
    },
    data() {
        return {
            title: 'New Orders',
            page: 1,
            isFetching: false,
            orders: [],
            filters: {
                date: '',
                search: '',
                selectedStatus: 'issued',
                selectedParty: '',
                perPage: 10,
                sortBys: [
                    { name: 'Latest Order', selected: true, value: 'created_at', order: 'desc'},
                    { name: 'Oldest Order', selected: false, value: 'created_at', order: 'asc'},
                    { name: 'Highest Quantity', selected: false, value: 'quantity', order: 'desc'},
                    { name: 'Lowest Quantity', selected: false, value: 'quantity', order: 'asc'},
                    { name: 'Nearest Delivery', selected: false, value: 'expected_at', order: 'asc'},
                    { name: 'Furthest Delivery', selected: false, value: 'expected_at', order: 'desc'},
                ],
            },
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        if (this.$route.query && this.$route.query.search) {
            this.filters.search = this.$route.query.search || '';
        }
        if (this.$route.query && this.$route.query.status) {
            this.filters.selectedStatus = this.$route.query.status || '';
        }
        this.loadMore();
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    watch: {
        filters: {
            handler() {
                console.log('Filters changed');
                this.page = 1;
                this.orders = [];
                this.loadMore();
            },
            deep: true,
        },
    },
    computed: {
        cardType() {
            return this.$store.getters['authy/getPrefix'] === 'brand' ? 'brand' : 'party';
        },
        parties() {
            if (this.orders && !this.orders.length) {
                return [];
                
            }
            const localOrders = this.orders;
            const uniquePartiesMap = {};
            const uniqueParties = [];

            if (localOrders) {
                localOrders.forEach(order => {
                    // Use sid as the key in the map.
                    const sid = order.party.sid;
                    // If this sid hasn't been added to uniqueParties, add it.
                    if (!uniquePartiesMap[sid]) {
                        uniqueParties.push(order.party);
                        uniquePartiesMap[sid] = true; // Mark this sid as added.
                    }
                });
            }
            
            return uniqueParties;
        },
        statuses() {
            return [
                { text: 'Issued', value: 'issued' },
                { text: 'Accepted', value: 'accepted' },
                { text: 'Rejected', value: 'rejected' },
            ];
        },
        prefix() {
            return this.$store.getters['authy/getPrefix'];
        },
    },
    methods: {
        handleScroll() {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (clientHeight + scrollTop >= scrollHeight - 5) { // Check if near bottom
                this.loadMore();
            }
        },
        loadMore() {
            if (this.isFetching)
                return;
            this.isFetching = true;

            const params = new URLSearchParams({
                page: this.page,
                search: this.filters.search,
                status: this.filters.selectedStatus,
                party: this.filters.selectedParty,
            });

            // Assuming you have only one selected sort option at a time
            const selectedSortOption = this.filters.sortBys.find(option => option.selected);
            if (selectedSortOption) {
                params.append('sortby', selectedSortOption.value);
                params.append('sortorder', selectedSortOption.order);
            }

            
            Axios.get(`orders?${params}&perpage=${this.filters.perPage}`).then(response => {
                    if (response.data.status === 'ok') {
                        this.orders = [...this.orders, ...response.data.data.data];
                        this.page++;
                        this.isFetching = false;
                    }
                    else if (response.data.status === 'error') {
                        this.isFetching = false;
                        alert(response.data.message);
                    }
                    else {
                        this.isFetching = false;
                        alert('Something went wrong! Please try again');
                    }
                }).catch((error) => {
                    this.isFetching = false;
                    console.log(error);
                    alert('Something went wrong! Please try again');
                });
        },
        handleFiltersChange(filters) {
            this.filters = filters;
        },
        resetFilters() {
            this.filters = {
                date: '',
                search: '',
                selectedStatus: 'issued',
                selectedParty: '',
                perPage: 10,
                sortBys: [
                    { name: 'Latest Order', selected: true, value: 'created_at', order: 'desc'},
                    { name: 'Oldest Order', selected: false, value: 'created_at', order: 'asc'},
                    { name: 'Highest Quantity', selected: false, value: 'quantity', order: 'desc'},
                    { name: 'Lowest Quantity', selected: false, value: 'quantity', order: 'asc'},
                    { name: 'Nearest Delivery', selected: false, value: 'expected_at', order: 'asc'},
                    { name: 'Furthest Delivery', selected: false, value: 'expected_at', order: 'desc'},
                ],
            };
        },
    },
}
</script>
  