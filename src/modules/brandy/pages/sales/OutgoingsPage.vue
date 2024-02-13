<template>
    <div class="font-title">
        <comming-soon module="brand" :links="links" title="Outwards" />
    </div>
</template>
  
<script>
import CommingSoon from '@/sections/CommingSoon.vue';

export default {
    name: 'OutgoingsPage',
    components: { CommingSoon },
    data() {
        return {
            links: [
                { name: 'BrandSos', label: 'SO' },
                { name: 'BrandOutgoings', label: 'Outwards' },
                { name: 'BrandSales', label: 'Bills' }
            ],
        };
    },
}
</script>
