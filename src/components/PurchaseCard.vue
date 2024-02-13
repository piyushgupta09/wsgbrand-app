<template>
    <div v-if="purchase && purchase.groups && Object.entries(purchase.groups).length" class="card rounded-0 mb-2">
        <div class="d-flex border-bottom">
            <img v-if="purchase.party" :src="purchase.party.image" class="of-cover w-80p" 
                data-bs-toggle="modal" data-bs-target="#imagePreviewModal" :data-bs-url="purchase.party.preview">
            <div class="flex-fill d-flex flex-column justify-content-between">
                <div class="p-2">
                    <div class="d-flex justify-content-between">
                        <span class="fw-bold">#{{ purchase.doc_id }}</span>
                        <span class="fw-bold">{{ purchase.quantity.toLocaleString() }} pcs.</span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span class="">{{ purchase.doc_date }}</span>
                        <span class="">Rs. {{ purchase.total.toLocaleString() }}</span>
                    </div>
                    <button class="btn btn-sm btn-outline-dark w-100 mt-2" data-bs-toggle="offcanvas" data-bs-target="#purchaseInfoModal"
                        :data-bs-purchasedocId="purchase.doc_id" aria-controls="purchaseInfoModal"> 
                        Show Products
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "PurchaseCard",
    props: ['purchase'],
}
</script> 
