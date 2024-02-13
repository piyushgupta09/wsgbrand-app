<template>
    <div>
        <OrderFilters
            :title="title"
            :parties="parties"
            :filters="filters"
            :statuses="statuses"
            @order-filter-updated="handleFiltersChange">
        </OrderFilters>
        <OrderTabs :links="links"></OrderTabs>
        <div v-if="orders && orders.length">
            <div v-for="(order, orderIndex) in filteredOrders" :key="orderIndex">
                <ul v-if="Object.keys(filteredOrders).length" class="list-group list-group-flush">
                    <OrderCard :order="order" :type="cardType" />
                </ul>
                <div v-else class="py-5">
                    <p class="text-muted text-center bg-light my-2">
                        No order found for the selected filters.
                    </p>
                </div>
            </div>
        </div>
        <EmptyList v-else title="No Orders Available"></EmptyList>
        <OrderDetails :orders="filteredOrders"  :type="cardType" />
    </div>
</template>

<script>
import Axios from '@/services/axios';
import EmptyList from '@/components/EmptyList.vue';
import OrderTabs from '@/components/OrderTabs.vue';
import OrderCard from '@/components/OrderCard.vue';
import OrderFilters from '@/components/OrderFilters.vue';
import OrderDetails from '@/components/OrderDetails.vue';

export default {
    name: 'OrdersPage',
    components: {
        OrderTabs,
        OrderCard,
        EmptyList,
        OrderDetails,
        OrderFilters,
    },
    data() {
        return {
            title: 'Orders',
            page: 1,
            isFetching: false,
            orders: [],
            filters: {
                date: '',
                search: '',
                selectedParty: '',
                selectedStatus: 'issued',
                sortBys: [
                    { name: { on: 'Latest Order', off: 'Oldest Order' }, selected: true },
                    { name: { on: 'Nearest Delivery', off: 'Furthest Delivery' }, selected: false },
                    { name: { on: 'Highest Quantity', off: 'Lowest Quantity' }, selected: false },
                ],
            },
            links: [
                { name: 'BrandSaleOrders', label: 'Wsg Orders' },
                { name: 'BrandPurchaseOrders', label: 'Party Orders' }
            ],
        };
    },
    mounted() {
        this.loadMore();
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    watch: {
        prefix: {
            handler(newValue) {
                if (newValue  === 'brand') {
                    this.filters.selectedParty = '';
                    this.filters.selectedStatus = 'rejected';
                }
                else if (newValue === 'factory' || newValue === 'vendor') {
                    this.filters.selectedParty = this.parties[0].sid;
                    this.filters.selectedStatus = 'issued';
                }
            },
            immediate: true,
        },
    },
    computed: {
        cardType() {
            return this.$store.getters['authy/getPrefix'] === 'brand' ? 'brand' : 'party';
        },
        statuses() {
            return [
                { text: 'Issued', value: 'issued' },
                { text: 'Accepted', value: 'accepted' },
                { text: 'Rejected', value: 'rejected' },
                { text: 'Completed', value: 'completed' },
            ];
        },
        parties() {
            const localOrders = this.orders;
            const uniquePartiesMap = {};
            const uniqueParties = [];

            if (localOrders) {
                localOrders.forEach(order => {
                    // Use sid as the key in the map.
                    const sid = order.party_sid;
                    // If this sid hasn't been added to uniqueParties, add it.
                    if (!uniquePartiesMap[sid]) {
                        uniqueParties.push(order.party);
                        uniquePartiesMap[sid] = true; // Mark this sid as added.
                    }
                });
            }
            
            return uniqueParties;
        },
        filteredOrders() {
            let orders = this.orders;

            if (this.filters.search) {
                const searchTerm = this.filters.search.toLowerCase();
                orders = orders.filter((order) => {
                    const orderTags = order.tags.split(',');
                    return orderTags.some(tag => tag.toLowerCase().includes(searchTerm.trim()));
                });
            }

            if (this.filters.selectedParty) {
                orders = orders.filter(order => order.party.sid === this.filters.selectedParty);
            }

            if (this.filters.selectedStatus) {
                orders = orders.filter(order => order.status === this.filters.selectedStatus);
            }

            if (this.filters.sortBys[0].selected) {
                orders = orders.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            } else {
                orders = orders.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
            }

            if (this.filters.sortBys[1].selected) {
                orders = orders.sort((a, b) => new Date(b.expected_at) - new Date(a.expected_at));
            } else {
                orders = orders.sort((a, b) => new Date(a.expected_at) - new Date(b.expected_at));
            }
            
            if (this.filters.sortBys[2].selected) {
                orders = orders.sort((a, b) => b.quantity - a.quantity);
            } else {
                orders = orders.sort((a, b) => a.quantity - b.quantity);
            }

            return orders;
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
            
            Axios.get(`orders?page=${this.page}`)
                .then((response) => {
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
    },
}
</script>
  