<template>
    <div class="font-title">
        <purchase-bills-section module="factory" :links="links" />
    </div>
</template>
  
<script>
import PurchaseBillsSection from '@/sections/PurchaseBillsSection.vue';

export default {
    name: 'PurchasesPage',
    components: { PurchaseBillsSection },
    data() {
        return {
            links: [
                { name: 'FactoryDispatches', label: 'Dispatches' },
                { name: 'FactorySales', label: 'Bills' }
            ],
        };
    },
}
</script>
