<template>
    <div v-if="activeOrder" class="offcanvas offcanvas-end" tabindex="-1" id="orderDetailsModal"
        aria-labelledby="orderDetailsModalLabel">

        <div class="offcanvas-header p-2 w-100 d-flex justify-content-between align-items-center bg-light border-bottom">
            <button id="closeOrderDetailModal" class="btn" data-bs-dismiss="offcanvas" data-bs-target="#orderDetailsModal" aria-label="Close">
                <i class="bi bi-chevron-left"></i>
            </button>
            <div class="d-flex flex-fill flex-column">
                <span class="fw-bold">{{ activeOrder.product_code }} | {{ activeOrder.quantity }} pcs.</span>
                <span class="small">Due Before: <strong>{{ activeOrder.expected_at }}</strong></span>
            </div>
        </div>

        <div class="offcanvas-body p-0">
            <div class="card rounded-0 border-0">
                
                <div class="card-header text-bg-dark rounded-0 d-flex justify-content-between align-items-center p-0 mb-3" 
                    data-bs-toggle="collapse" data-bs-target="#orderDetailsCollapse" 
                    aria-expanded="false" aria-controls="orderDetailsCollapse"
                >
                    <span class="px-3 text-capitalize">{{ activeOrder.product_name }}</span>
                    <button class="btn border-0 btn-secondary rounded-0">
                        <i class="bi bi-chevron-down"></i>
                    </button>
                </div>

                <!-- Product Order Items -->
                <div id="orderDetailsCollapse" class="collpase" :class="{ 
                        'show' : activeOrder.status === 'issued',
                        'collapse' : activeOrder.status !== 'issued',
                    }">       
                    <div class="card-body" v-for="(item, itemIndex) in activeOrder.items" :key="itemIndex">
                        <div v-if="item.quantity" class="d-flex mb-2">

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

                <!-- Material Order Items -->
                <div v-if="type === 'factory' && activeOrder.pos && activeOrder.pos.length && activeOrder.status === 'accepted'">       
                    <div class="card mb-3 mx-3" v-for="(po, poIndex) in activeOrder.pos" :key="poIndex">
                        <div class="card-body p-0">
                            <div class="d-flex justify-content-between align-items-center p-2">
                                <img v-if="po.image" :src="po.image" class="of-cover w-80p" 
                                    data-bs-toggle="modal" data-bs-target="#imagePreviewModal" :data-bs-url="po.preview">

                                <div class="d-flex flex-column flex-fill">
                                    <div class="d-flex align-items-center">
                                        <div class="d-flex flex-fill">
                                            <span class="text-capitalize fw-500 me-2">{{ po.sid }}</span>
                                            <span class="badge text-bg-secondary fw-bold ls-1">{{ po.status }}</span>
                                        </div>
                                        <a :href="previewLink(po.uuid)" target="_blank" rel="noopener noreferrer" 
                                            class="btn btn-primary btn-sm">
                                            <i class="bi bi-printer-fill"></i>
                                        </a>
                                    </div>
                                    
                                </div>                                
                            </div>
                        </div>
                        <div class="text-bg-dark mt-1 text-center p-1">
                            <span class="text-capitalize small fw-bold">{{ po.name }}</span>
                        </div>
                        <table class="table table-sm table-striped table-borderless m-0">
                            <thead class="table-secondary">
                                <tr>
                                    <th scope="col" class="small text-start">Name</th>
                                    <th scope="col" class="small text-end">Rate</th>
                                    <th scope="col" class="small text-end">Quantity</th>
                                    <th scope="col" class="small text-end">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, itemIndex) in po.items" :key="itemIndex">
                                    <td class="small text-start">{{ item.name }}</td>
                                    <td class="small text-end">{{ item.rate.toLocaleString() }}</td>
                                    <td class="small text-end">{{ item.quantity.toLocaleString() }}</td>
                                    <td class="small text-end">{{ item.amount.toLocaleString() }}</td>
                                </tr>
                            </tbody>
                            <tfoot class="table-secondary">
                                <tr>
                                    <th colspan="2" class="small text-start">Total</th>
                                    <th class="small text-end">{{ po.quantity.toLocaleString() }}</th>
                                    <th class="text-end">{{ po.amount.toLocaleString() }}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                <div v-else class="card-body pt-0">

                    <!-- Order Note -->
                    <div v-if="activeOrder.content" class="mb-3 border rounded p-2">
                        <label class="fw-500 border-bottom" style="width: fit-content">Order Note:</label>
                        <div class="">
                            {{ activeOrder.content }}
                        </div>
                    </div>

                    <!-- Order Action for Party -->
                    <div v-if="activeOrder.status === 'issued' && (type === 'factory' || type === 'vendor')">

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
    computed: {
        monaalUrl() {
            return this.$store.getters['repo/getMonaalUrl'];
        },
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
        previewLink(uuid) {
            return `${this.monaalUrl}/view/customers/${uuid}`;
        },
        orderAction(order, status) {
            if (status === 'rejected' && this.content === '') {
                this.error = "Message is required to reject order.";
                return;
            }
            let storeDispatch = null;
            switch (this.type) {
                case 'brand':
                    storeDispatch = 'brandy/orderAction';
                    break;
                case 'vendor':
                    storeDispatch = 'vendor/orderAction';
                    break;
                case 'factory':
                    storeDispatch = 'factory/orderAction';
                    break;
                default: break;
            }
            
            if (storeDispatch) {
                this.$store.dispatch(storeDispatch, {
                    status: status,
                    order: order.sid,
                    content: this.content,
                    expected_at: order.expected_at
                })

                // close offcanvas by clicking on #closeOrderDetailModal button
                document.getElementById('closeOrderDetailModal').click();
            }
        },
    }
}
</script> 
