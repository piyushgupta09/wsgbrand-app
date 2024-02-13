<template>
    <div v-if="activeOrder" class="offcanvas offcanvas-end" tabindex="-1" id="orderDetailsModal"
        aria-labelledby="orderDetailsModalLabel">

        <div class="offcanvas-header p-2 w-100 d-flex justify-content-between align-items-center bg-light border-bottom">
            <i class="bi bi-chevron-left pe-3" data-bs-dismiss="offcanvas" data-bs-target="#orderDetailsModal" aria-label="Close"></i>
            <div class="d-flex flex-fill flex-column">
                <span class="fw-bold">{{ activeOrder.product_code }} | {{ activeOrder.quantity }} pcs.</span>
                <span class="small">Due Before: <strong>{{ activeOrder.expected_at }}</strong></span>
            </div>
        </div>

        <div class="offcanvas-body p-0">
            <div class="card rounded-0 border-0">
                <div class="card-header text-bg-dark rounded-0">
                    {{ activeOrder.product_name }}
                </div>
                <div class="card-body">

                    <!-- Order Items -->
                    <div class="row mb-2">       
                        <div class="col-12" v-for="(item, itemIndex) in activeOrder.items" :key="itemIndex">
                            <div class="d-flex mb-2">

                                <img :src="item.image" class="of-cover w-80p" 
                                data-bs-toggle="modal" data-bs-target="#imagePreviewModal" :data-bs-url="item.preview">

                                <div class="flex-fill d-flex flex-column p-2">
                                    <div class="d-flex justify-content-between">
                                        <span class="text-capitalize fw-500">{{ item.option }}</span>
                                        <span class="fw-bold">{{ item.quantity }} pcs.</span>
                                    </div>
                                    <hr class="my-2">
                                    <div class="d-flex justify-content-between w-50" v-for="(itemRange, itemRangeIndex) in item.ranges" :key="itemRangeIndex">
                                        <span class="small fw-500">{{ itemRange.range }}</span>
                                        <span class="small fw-500">{{ itemRange.quantity }} {{ itemRange.quantity ? 'pcs.' : 'Nil' }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Order Note -->
                    <div v-if="activeOrder.content" class="form-floating mb-3">
                        <input type="text" class="form-control" :value="activeOrder.content" disabled>
                        <label for="floatingInput">Order Note:</label>
                    </div>

                    <!-- Order Action for Party -->
                    <div v-if="type === 'party'">

                        <!-- Accept Or Reject Message -->
                        <textarea class="form-control mb-3" v-model="content" placeholder="Enter Reject Reason Or Accept Condition"></textarea>

                        <!-- Validation Error -->
                        <p v-if="error" class="alert alert-danger mb-3">{{ error }}</p>

                        <!-- Action Buttons -->
                        <div class="btn-group d-flex w-100 mb-3">
                            <button class="flex-fill btn btn-outline-danger rounded-0" @click="orderAction(activeOrder, 'rejected')">
                                <div class="d-flex justify-content-around align-items-center">
                                    <span class="">Reject Order</span>
                                    <i class="bi bi-x-lg fs-5"></i>
                                </div>
                            </button>
                            <button class="flex-fill btn btn-success rounded-0" @click="orderAction(activeOrder, 'accepted')">
                                <div class="d-flex justify-content-around align-items-center">
                                    <span class="">Accept Order</span>
                                    <i class="bi bi-check2 fs-5"></i>
                                </div>
                            </button>
                        </div>

                    </div>

                    <!-- Party Details for Brand -->
                    <div v-if="type === 'brand' && activeOrder.party">
                        <p class="fw-bold p-2 text-center text-bg-dark">
                            Party Details
                        </p>
                        <div class="d-flex justify-content-between">
                            <span class="fw-bold">Place By:</span>
                            <span>{{ activeOrder.orderfrom }}</span>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-between">
                            <span class="fw-bold">Party Name:</span>
                            <span v-if="activeOrder.party.name">
                                {{ activeOrder.party.name }}
                            </span>
                            <span v-else>Not Available</span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span class="fw-bold">Party Image:</span>
                            <img v-if="activeOrder.party.image" :src="activeOrder.party.image" class="wh-50 of-cover">
                        </div>
                        <div class="d-flex justify-content-between">
                            <span class="fw-bold">Party Type:</span>
                            <span v-if="activeOrder.party.type">
                                {{ activeOrder.party.type }}
                            </span>
                            <span v-else>Not Available</span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span class="fw-bold">Party Mobile:</span>
                            <span v-if="activeOrder.party.mobile">
                                {{ activeOrder.party.mobile }}
                            </span>
                            <span v-else>Not Available</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "OrderDetailCard",
    props: ['orders', 'type'],
    data() {
        return {
            activeOrder: {},
            content:'',
            error:''
        };
    },
    async mounted() {
        this.loadActiveOrder();
    },
    methods: {
        loadActiveOrder() {
            const orderDetailsModal = document.getElementById('orderDetailsModal')
            if (orderDetailsModal) {
                orderDetailsModal.addEventListener('show.bs.offcanvas', event => {
                    const button = event.relatedTarget
                    const ordersid = button.getAttribute('data-bs-ordersid');
                    this.activeOrder = this.orders.find(order => order.sid === ordersid);
                });
            }
        },
        orderAction(order, status) {
            if (status === 'rejected' && this.content === '') {
                this.error = "Message is required to reject order.";
                return;
            }
            this.$store.dispatch('factory/orderAction', {
                status: status,
                order: order.sid,
                content: this.content,
                expected_at: order.expected_at
            })
        },
    }
}
</script> 
