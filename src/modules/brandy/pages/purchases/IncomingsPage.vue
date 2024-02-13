<template>
    <div class="font-title">
        <new-dispatch-section module="brand" :links="links" />
    </div>
</template>
  
<script>
import NewDispatchSection from '@/sections/NewDispatchSection.vue';

export default {
    name: 'IncomingsPage',
    components: { NewDispatchSection },
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
