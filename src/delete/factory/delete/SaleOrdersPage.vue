<template>
    <div class="font-title">
        <OrderFilters :title="title" :filters="filters" :statuses="statuses" @order-filter-updated="handleFiltersChange">
        </OrderFilters>
        <OrderTabs />
        <div v-if="orders && orders.length">
            <div v-for="(order, orderIndex) in filteredOrders" :key="orderIndex">
                <ul v-if="Object.keys(filteredOrders).length" class="list-group list-group-flush">
                    <OrderCard :order="order" :type="prefix" />
                </ul>
                <div v-else class="py-5">
                    <p class="text-muted text-center bg-light my-2">
                        No order found for the selected filters.
                    </p>
                </div>
            </div>
        </div>
        <EmptyList v-else title="No Orders Available"></EmptyList>
        <OrderDetails :orders="filteredOrders" :type="prefix" />
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
    name: 'SaleOrdersPage',
    components: {
        OrderTabs,
        OrderCard,
        EmptyList,
        OrderDetails,
        OrderFilters,
    },
    data() {
        return {
            title: 'Metro Orders',
            page: 1,
            isFetching: false,
            orders: [],
            filters: {
                date: '',
                search: '',
                selectedStatus: 'issued',
                sortBys: [
                    { name: { on: 'Latest Order', off: 'Oldest Order' }, selected: true },
                    { name: { on: 'Nearest Delivery', off: 'Furthest Delivery' }, selected: false },
                    { name: { on: 'Highest Quantity', off: 'Lowest Quantity' }, selected: false },
                ],
            },
        };
    },
    mounted() {
        this.loadMore();
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    computed: {
        prefix() {
            return this.$store.getters['authy/getPrefix'];
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

            return orders;
        },
    },
    methods: {
        handleFiltersChange(filters) {
            this.filters = filters;
        },
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

            Axios.get(`orders?status=issued&page=${this.page}`)
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

    },
}
</script>
  