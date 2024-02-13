<template>
    <li v-if="order" class="list-group-item p-0 d-flex">

        <img :src="order.image" class="of-cover w-90p" 
            data-bs-toggle="modal" data-bs-target="#imagePreviewModal" :data-bs-url="order.preview">
        
        <div class="flex-fill d-flex flex-column justify-content-between">
            <div class="p-2">
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
            <div class="btn-group" role="group">
                <button class="d-flex align-items-center justify-content-center btn btn-sm border rounded-0"
                    data-bs-toggle="offcanvas" data-bs-target="#orderDetailsModal" :data-bs-ordersid="order.sid"
                    aria-controls="orderDetailsModal">
                    <span class="me-3">Detail</span>
                    <i class="bi bi-chevron-right"></i>
                </button>
                <button v-if="type === 'party'" class="d-flex align-items-center justify-content-center btn btn-sm btn-success rounded-0"
                    @click="orderAction(order, 'accepted')">
                    <span class="me-3">Accept</span>
                    <i class="bi bi-chevron-right"></i>
                </button>
                <button 
                    v-if="type === 'brand' && order.status === 'rejected'" 
                    class="d-flex align-items-center justify-content-center btn btn-sm btn-warning rounded-0"
                    @click="orderAction(order, 'issued')">
                    <span class="me-3">Re-Issue</span>
                    <i class="bi bi-chevron-right"></i>
                </button>
                <button 
                    v-if="type === 'brand' && order.status === 'accepted'" 
                    class="d-flex align-items-center justify-content-center btn btn-sm btn-danger rounded-0"
                    @click="orderAction(order, 'cancelled')">
                    <span class="me-3">Cancel</span>
                    <i class="bi bi-chevron-right"></i>
                </button>
                <button 
                    v-if="type === 'brand' && order.status === 'issued'" 
                    class="d-flex align-items-center justify-content-center btn btn-sm btn-dark rounded-0"
                    @click="orderAction(order, 'deleted')">
                    <span class="me-3">Delete</span>
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
    methods: {
        orderAction(order, status) {
            this.$store.dispatch('factory/orderAction', {
                status: status,
                order: order.sid,
                expected_at: order.expected_at
            })
        },
    },
}
</script> 
