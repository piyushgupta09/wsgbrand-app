<template>
    <div class="card card-body text-dark mb-3" v-for="(item, index) in support" :key="index">
        <div class="d-flex flex-column justify-content-center align-items-center">
            <i class="fs-1 bi" :class="item.icon"></i>
            <div class="text-center fw-bold text-capitalize font-title ls-1">{{ item.title }}</div>
            <div class="text-center font-heading fw-500">{{ item.value }}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SupportPage',
    mounted() {
        this.$store.dispatch('authy/fetchSupportDetails');
    },
    computed: {
        support() {
            return this.$store.getters['authy/support'];
        },
    },
};
</script>
  