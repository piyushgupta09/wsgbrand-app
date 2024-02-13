<template>
    <div class="font-title">
        <purchase-bills-section module="brand" :links="links" />
    </div>
</template>
  
<script>
import PurchaseBillsSection from '@/sections/PurchaseBillsSection.vue';

export default {
    name: 'PosPage',
    components: { PurchaseBillsSection },
    data() {
        return {
            links: [
                { name: 'BrandPos', label: 'PO' },
                { name: 'BrandIncomings', label: 'Inwards' },
                { name: 'BrandPurchases', label: 'Bills' }
            ],
        };
    },
}
</script>
