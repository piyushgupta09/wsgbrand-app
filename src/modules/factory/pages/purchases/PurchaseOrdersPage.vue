<template>
    <di class="font-title">
        <OrderFilters
            :title="title"
            :filters="filters"
            @order-filter-updated="handleFiltersChange" 
        />
        <OrderTabs 
            :links="links" 
        />
        <div v-if="Object.keys(filteredOrders).length">
            <div v-for="(order, orderIndex) in filteredOrders" :key="orderIndex">
                <ul class="list-group list-group-flush">
                    <OrderCard :order="order" type="pocard" />
                </ul>
            </div>
        </div>
        <EmptyList v-else title="No Orders Available, try adjusting filters" />
        <OrderDetails :orders="filteredOrders"  :type="prefix" />
    </di>
</template>

<script>
import Axios from '@/services/axios';
import EmptyList from '@/components/EmptyList.vue';
import OrderTabs from '@/components/OrderTabs.vue';
import OrderCard from '@/components/OrderCard.vue';
import OrderFilters from '@/components/OrderFilters.vue';
import OrderDetails from '@/components/OrderDetails.vue';

export default {
    name: 'PurchaseOrdersPage',
    components: {
        OrderTabs,
        OrderCard,
        EmptyList,
        OrderDetails,
        OrderFilters,
    },
    data() {
        return {
            title: 'Purchases',
            page: 1,
            isFetching: false,
            orders: [],
            filters: {
                search: '',
                perPage: 10,
                selectedStatus: 'accepted',
            },
            links: [
                { name: 'FactoryPurchaseOrders', label: 'Orders' },
                { name: 'FactoryPurchaseBills', label: 'Bills' }
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
        statuses() {
            return [
                { text: 'Draft', value: 'draft' },
                { text: 'Issued', value: 'issued' },
                { text: 'Partial', value: 'partial' },
                { text: 'Completed', value: 'completed' },
                { text: 'Cancelled', value: 'cancelled' },
            ];
        },
    },
    methods: {
        handleFiltersChange(filters) {
            this.filters = filters;
            this.loadMore();
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

            Axios.get(`factory/pos?status=${this.filters.selectedStatus}&perpage=${this.filters.perPage}&page=${this.page}`)
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
  