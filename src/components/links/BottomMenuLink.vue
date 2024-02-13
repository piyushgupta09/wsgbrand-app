<template>
    <router-link :to="{ name: link.path }"
        :class="['btn text-light w-60p border-0 shadow-none flex-fill d-flex flex-column align-items-center', { 'router-link-active': isActiveLink }]">
        <i class="fs-5 lh-sm bi" :class="link.icon"></i>
        <span class="hide-below-325px smaller" v-text="link.name"></span>
    </router-link>
</template>

<script>
export default {
    name: 'BottomMenuLink',
    props: ['link'],
    computed: {
        isActiveLink() {
            const currentRoutePath = this.$route.path.toLowerCase();
            const currentRoute = currentRoutePath.substring(0, currentRoutePath.lastIndexOf('/'));
            return currentRoute.includes(this.link.name.toLowerCase());
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../services/styles/variables.scss';

.router-link-active.btn {
    color: $brand-primary !important;
}
</style>
