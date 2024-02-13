<template>
    <div class="font-title">
        <new-dispatch-section module="factory" :links="links" />
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
                { name: 'FactoryDispatches', label: 'Dispatches' },
                { name: 'FactorySales', label: 'Bills' }
            ],
        };
    },
}
</script>
