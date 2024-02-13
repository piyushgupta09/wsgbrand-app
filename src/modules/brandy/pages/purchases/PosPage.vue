<template>
    <div class="font-title">
        <new-orders-section module="brand" :links="links" />
    </div>
</template>
  
<script>
import NewOrdersSection from '@/sections/NewOrdersSection.vue';

export default {
    name: 'PosPage',
    components: { NewOrdersSection },
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
