<template>
    <div v-if="dispatch && dispatch.items && Object.entries(dispatch.items).length" class="w-100">
        <div class="d-flex">
                        
            <img :src="dispatch.image" class="of-cover w-80p" 
                data-bs-toggle="modal" data-bs-target="#imagePreviewModal" :data-bs-url="dispatch.preview">

            <div class="flex-fill d-flex flex-column justify-content-between">

                <div class="flex-fill p-2"
                    data-bs-toggle="offcanvas" data-bs-target="#dispatchOrderModal" 
                    :data-bs-dispatch-sid="dispatch.sid" aria-controls="dispatchOrderModal">

                    <div class="d-flex justify-content-between fw-bold">
                        <span>{{ dispatch.product_code }} | {{ dispatch.product_name }}</span>
                        <span class="fw-bold">{{ dispatch.quantity.toLocaleString() }} pcs</span>
                    </div>

                    <div v-if="dispatch.note && dispatch.note.length" class="d-flex">
                        <span class="me-1">Note:</span>
                        <div class="d-flex" v-for="(note, noteIndex) in dispatch.note" :key="noteIndex">
                            <span class="me-2">{{ note.content }}</span>
                        </div>
                    </div>
                
                </div>

                <div class="btn-group d-flex">
                    <router-link :to="getLedgerDetailPageRoute" 
                        class="btn btn-sm btn-outline-dark flex-fill rounded-0 border-secondary border-start-0">
                        <i class="bi bi-chevron-left"></i>
                        <span class="ps-2">Ledger</span>
                    </router-link>
                    <button class="btn btn-sm btn-outline-dark flex-fill rounded-0 border-secondary" 
                        data-bs-toggle="offcanvas" data-bs-target="#dispatchOrderModal" 
                        :data-bs-dispatch-sid="dispatch.sid" aria-controls="dispatchOrderModal">
                        Show Details
                    </button>
                    <router-link v-if="dispatch.is_billed" :to="getBillPageRoute" 
                        class="btn btn-sm btn-outline-dark flex-fill rounded-0 border-secondary border-end-0">
                        <span class="pe-2">Bill</span>
                        <i class="bi bi-chevron-right"></i>
                    </router-link>
                    <div v-else class="flex-fill d-flex">
                        <button v-if="isBrand && dispatch.status === 'pending'" class="btn btn-sm btn-outline-dark flex-fill rounded-0 border-start-0 border-secondary" 
                            data-bs-toggle="offcanvas" data-bs-target="#dispatchStockInModal" 
                            :data-bs-dispatch-sid="dispatch.sid" aria-controls="dispatchStockInModal">
                            <span class="fw-500 pe-2">Stock In</span>
                            <i class="bi bi-chevron-down"></i>
                        </button>
                        <div v-else class="btn btn-sm btn-outline-dark flex-fill rounded-0 border-secondary border-end-0 p-0">
                            <div v-if="dispatch.status === 'pending'" class="d-flex justify-content-center text-bg-warning p-1">
                                <span class="fw-500 pe-2">Bill Pending</span>
                                <i class="bi bi-hourglass-split"></i>
                            </div>
                            <div v-else class="d-flex justify-content-center text-bg-success p-1">
                                <span class="fw-500 pe-2">Billed</span>
                                <i class="bi bi-check-circle-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    name: "DispatchCard",
    props: ['dispatch'],
    data() {
        return {
            error: '',
            message: '',
        };
    },
    computed: {
        isBrand() {
            return this.prefix === 'brand';
        },
        isParty() {
            return this.prefix !== 'brand';
        },
        prefix() {
            return this.$store.getters['authy/getPrefix'];
        },
        getLedgerDetailPageRoute() {
            switch (this.prefix) {
                case 'brand': return { name: 'BrandProductLedger', params: { ledger: this.dispatch.ledger_sid } };
                case 'factory': return { name: 'FactoryLedgerDetail', params: { ledger: this.dispatch.ledger_sid } };
                case 'vendor': return { name: 'VendorLedgerDetail', params: { ledger: this.dispatch.ledger_sid } };
                default: return { name: 'Home' };
            }
        },
        getBillPageRoute() {
            switch (this.prefix) {
                case 'brand': return { name: 'BrandPurchases', query: { search: this.dispatch.is_billed } };
                case 'factory': return { name: 'FactorySales', query: { search: this.dispatch.is_billed } };
                case 'vendor': return { name: 'VendorSales', query: { search: this.dispatch.is_billed } };
                default: return { name: 'Home' };
            }
        },
    },
    methods: {
        dispatchAction(dispatch, status) {
            this.$store.dispatch('dispatchAction', {
                status: status,
                sid: dispatch.sid,
                message: this.message,
                expected_at: dispatch.expected_at
            })
        },
    },
}
</script> 
