<template>
    <div>
        <OrderFilter 
            :statuses="statuses"
            :filters="{ search: search, status: status }"
            @order-filters-updated="handleOrderFilters" 
        />

        <ul v-if="filteredOrders && filteredOrders.length" class="list-group list-group-flush">
            <li class="list-group-item p-0" v-for="(order, orderIndex) in filteredOrders" :key="orderIndex">
                <div class="d-flex">
                    <img :src="order.image" class="of-cover h-70p" 
                         data-bs-toggle="modal" data-bs-target="#imagePreviewModal" :data-bs-url="order.preview">
                         <div v-if="order.items" class="flex-fill d-flex flex-column justify-content-between">
                        <div class="p-2">
                            <div class="d-flex justify-content-between">
                                <p class="fw-bold mb-0 truncate">{{ order.product_name }}
                                </p>
                                <span class="badge rounded-pill text-bg-secondary"> {{ order.status }}</span>
                            </div>
                            <div class="d-flex justify-content-between">
                                <small class="">{{ order.sid }}</small>
                                <small class="">{{ order.quantity }}</small>
                            </div>
                            <span>
                                {{ order.message }}
                            </span>
                        </div>
                        <!-- <div class="d-flex justify-content-between" role="group">
                            <button class="w-100 d-flex justify-content-center mx-1 btn btn-danger rounded-0"
                                v-if="order.status === 'accepted' || order.status === 'issued'"
                                @click="cancelOrder(order.sid)">
                                Cancel Order
                            </button>
                            <button v-if="order.status === 'rejected'" @click="reissuePurchaseOrder(order.sid, 'reorder')"
                                class="btn btn-warning rounded-0 mx-1 w-100">
                                Re-Issue
                            </button>
                            <button v-if="order.status === 'cancelled' || order.status === 'rejected'"
                                @click="reorderPurchaseOrder(order.sid)" class="btn btn-info rounded-0 mx-1 w-100">
                                Re-Order
                            </button>
                        </div> -->
                    </div>
                </div>
            </li>
        </ul>
        <div v-else class="py-5">
            <p class="text-muted text-center bg-light my-2">There is no product in Order.</p>
        </div>

    </div>
</template>

<script>
import OrderFilter from '../components/OrderFilter.vue';

export default {
    components: { OrderFilter },
    data() {
        return {
            page: 1,
            search: '',
            status: 'rejected',
            statuses: ['issued', 'accepted', 'rejected', 'cancelled'],
        };
    },
    watch: {
        status() {
            this.fetchData();
        },
    },
    mounted() {
        this.fetchData();
    },
    computed: {
        filteredOrders() {
            return this.$store.getters['brandy/filteredOrders'];
        }
    },
    methods: {
        handleOrderFilters(filters) {
            this.search = filters.search;
            this.status = filters.status;
            this.fetchData();
        },
        fetchData() {
            this.$store.dispatch('brandy/fetchFilteredOrders', {
                page: this.page,
                status: this.status,
                search: this.search,
            });
        },
    },
}
</script>
