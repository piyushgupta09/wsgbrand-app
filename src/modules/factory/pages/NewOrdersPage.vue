<template>
    <new-orders-section module="factory" :links="[]" />
</template>

<script>
import NewOrdersSection from '@/sections/NewOrdersSection.vue';

export default {
    name: 'NewOrdersPage',
    components: { NewOrdersSection },
};
</script>