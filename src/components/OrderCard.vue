<template>
    <li v-if="order" class="list-group-item p-0 d-flex">

        <!-- Brand Order Image -->
        <img :src="order.image" 
            class="of-cover w-90p" 
            data-bs-toggle="modal" 
            data-bs-target="#imagePreviewModal" 
            :data-bs-url="order.preview"
        >
        
        <div class="flex-fill d-flex flex-column justify-content-between">

            <!-- Order Details -->
            <div  class="p-2">
                <div class="d-flex justify-content-between fw-bold">
                    <span>#{{ order.product_code }} | {{ order.sid }}</span>
                    <span>{{ order.quantity.toLocaleString() }} pcs</span>
                </div>
                <div class="small">{{ order.due_date }}</div>
                <div class="d-flex justify-content-between small">
                    <span>FabRate is Rs. {{ order.fab_rate }}/pc</span>
                    <span>₹ {{ (order.fab_rate * order.quantity).toLocaleString() }}</span>
                </div>
            </div>

            <div v-if="order.status" class="btn-group" role="group">

                <!-- A1. TYPE = factory | vendor | brand ------------------ Order Detail -->
                <button 
                    v-if="type !== 'pocard'"
                    class="d-flex align-items-center justify-content-center btn btn-sm border rounded-0"
                    data-bs-toggle="offcanvas" data-bs-target="#orderDetailsModal" :data-bs-ordersid="order.sid"
                    aria-controls="orderDetailsModal">
                    <span class="me-3 fw-500">Detail</span>
                    <i class="bi bi-chevron-right"></i>
                </button>

                <!-- A2. TYPE = factory ------------------ Po Detail -->
                <button 
                    v-else-if="order.status === 'accepted'"
                    class="d-flex align-items-center justify-content-center btn btn-sm border rounded-0"
                    data-bs-toggle="offcanvas" data-bs-target="#orderDetailsModal" :data-bs-ordersid="order.sid"
                    aria-controls="orderDetailsModal">
                    <span class="me-3 fw-500">Detail</span>
                    <i class="bi bi-chevron-right"></i>
                </button>

                 <!-- B1. TYPE = factory | vendor & STATUS = issued ------------- Acept Order -->
                <button 
                    v-if="(type === 'factory' || type === 'vendor') && order.status === 'issued'" 
                    class="d-flex align-items-center justify-content-center btn btn-sm btn-success rounded-0"
                    @click="orderAction(order, 'accepted')">
                    <span class="me-3 fw-500">Accept Order</span>
                    <i class="bi bi-chevron-right"></i>
                </button>

                 <!-- B2. TYPE = factory & STATUS = accepted -->
                 <!-- <button 
                    v-if="type === 'factory' && order.status === 'accepted'"
                    class="d-flex align-items-center justify-content-center btn btn-sm btn-success rounded-0"
                    @click="orderAction(order, 'completed')">
                    <span class="me-3 fw-500 text-capitalize">{{ order.status }}</span>
                    <i class="bi bi-chevron-right"></i>
                </button> -->
                
                <!-- C1. TYPE = brand & STATUS = rejected ----------------- Re-Issue -->
                <button
                    v-if="type === 'brand' && order.status === 'rejected'" 
                    class="d-flex align-items-center justify-content-center btn btn-sm btn-warning rounded-0"
                    @click="orderAction(order, 'issued')">
                    <span class="me-3 fw-500">Re-Issue</span>
                    <i class="bi bi-chevron-right"></i>
                </button>

                <!-- C2. TYPE = brand & STATUS = accepted ----------------- Cancel -->
                <button  
                    v-if="type === 'brand' && order.status === 'accepted'" 
                    class="d-flex align-items-center justify-content-center btn btn-sm btn-danger rounded-0"
                    @click="orderAction(order, 'cancelled')">
                    <span class="me-3 fw-500">Cancel</span>
                    <i class="bi bi-chevron-right"></i>
                </button>

                <!-- C3. TYPE = brand & STATUS = issued ----------------- Delete -->
                <button 
                    v-if="type === 'brand' && order.status === 'issued'" 
                    class="d-flex align-items-center justify-content-center btn btn-sm btn-dark rounded-0"
                    @click="orderAction(order, 'deleted')">
                    <span class="me-3 fw-500">Delete</span>
                    <i class="bi bi-chevron-right"></i>
                </button>

            </div>
        </div>
        
    </li>
</template>
  
<script>
export default {
    name: "OrderCard",
    props: ['order', 'type'], 
    computed: {
        prefix() {
            return this.$store.getters['authy/getPrefix'];
        },
    },
    methods: {
        orderAction(order, status) {
            let storeDispatch = null;
            switch (this.prefix) {
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
                    expected_at: order.expected_at
                })
            }
        },
    },
}
</script> 
