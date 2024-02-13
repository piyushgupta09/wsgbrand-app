<template>
    <div>
        <OrderFilters
            :title="title"
            :filters="filters"
            :statuses="statuses"
            @order-filter-updated="handleFiltersChange">
        </OrderFilters>
        <OrderTabs :links="links"></OrderTabs>
        <OrderTabs v-if="prefix === 'brand'" />
        <div v-if="Object.keys(filteredOrders).length">
            <div v-for="(order, orderIndex) in filteredOrders" :key="orderIndex">
                <ul class="list-group list-group-flush">
                    <OrderCard :order="order" :type="prefix" />
                </ul>
            </div>
        </div>
        <EmptyList v-else title="No Orders Available, try adjusting filters"></EmptyList>
        <OrderDetails :orders="filteredOrders"  :type="prefix" />
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
    name: 'OrdersPage',
    components: {
        OrderCard,
        EmptyList,
        OrderTabs,
        OrderDetails,
        OrderFilters,
    },
    data() {
        return {
            title: 'Wsg Orders',
            page: 1,
            isFetching: false,
            orders: [],
            filters: {
                date: '',
                search: '',
                selectedParty: '',
                selectedStatus: 'accepted',
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
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    watch: {
        filters: {
            handler(newValue, oldValue) {
                if (newValue.selectedStatus !== oldValue.selectedStatus 
                    || newValue.search !== oldValue.search) {
                    this.page = 1;
                    this.orders = [];
                    this.loadMore();
                }
            },
            deep: true,
        },
    },
    computed: {
        statuses() {
            return [
                { text: 'Issued', value: 'issued' },
                { text: 'Accepted', value: 'accepted' },
                { text: 'Rejected', value: 'rejected' },
                { text: 'Completed', value: 'completed' },
            ];
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
            
            Axios.get(`orders?page=${this.page}&status=${this.filters.selectedStatus}&search=${this.filters.search}`)
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
  