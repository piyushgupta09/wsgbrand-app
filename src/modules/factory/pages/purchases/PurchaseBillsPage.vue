<template>
    <div class="font-title">
        <OrderFilters :title="title"  :filters="filters"  @order-filter-updated="handleFiltersChange"  />
        <OrderTabs :links="links" />
        <div v-if="Object.keys(filteredOrders).length">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="(order, orderIndex) in filteredOrders" :key="orderIndex">
                    <a :href="previewLink(order.uuid)" target="_blank" rel="noopener noreferrer" class="td-none text-dark d-flex">
                        <div class="flex-fill d-flex flex-column">
                            <span class="fw-500">{{ order.doc_date }}</span>
                            <div class="d-flex align-items-center">
                                <span class="me-3 fw-bold">#{{ order.doc_no }}</span>
                                <span class="badge bg-primary">{{ order.status }}</span>
                            </div>
                        </div>
                        <div class="d-flex flex-column align-items-end">
                            <span class="fw-500">Paybale ₹ {{ order.amount }}</span>
                            <span>Balance ₹ {{ order.amount }}</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <EmptyList v-else title="No Orders Available, try adjusting filters" />
    </div>
</template>

<script>
import Axios from '@/services/axios';
import EmptyList from '@/components/EmptyList.vue';
import OrderTabs from '@/components/OrderTabs.vue';
import OrderFilters from '@/components/OrderFilters.vue';

export default {
    name: 'PurchaseBillsPage',
    components: {
        OrderTabs,
        EmptyList,
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
                selectedStatus: 'draft',
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
        monaalUrl() {
            return this.$store.getters['repo/getMonaalUrl'];
        }
    },
    methods: {
        previewLink(uuid) {
            return `${this.monaalUrl}/view/customers/${uuid}`;
        },
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

            Axios.get(`factory/bills?status=${this.filters.selectedStatus}&page=${this.page}`)
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
  