<template>
    <div v-if="order" class="card rounded-0 mb-2">
        <div class="d-flex border-bottom">

            <img :src="order.image" class="of-cover w-90p" 
                data-bs-toggle="modal" data-bs-target="#imagePreviewModal" :data-bs-url="order.preview">
          
            <div class="flex-fill d-flex flex-column justify-content-between">
                <div class="p-2">
                    <div class="d-flex justify-content-between fw-bold">
                        <span>{{ order.product_code }}</span>
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
                        data-bs-toggle="offcanvas" data-bs-target="#orderInfoModal" :data-bs-ordersid="order.sid"
                        aria-controls="orderInfoModal">
                        <span class="me-3">Detail</span>
                        <i class="bi bi-chevron-right"></i>
                    </button>
                    <button class="d-flex align-items-center justify-content-center btn btn-sm btn-success rounded-0"
                        @click="orderAction(order, 'accepted')">
                        <span class="me-3">Accept</span>
                        <i class="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="p-5">
        No Order Available
    </div>
</template>
  
<script>
export default {
    name: "OrderCard",
    props: ['order'], 
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
