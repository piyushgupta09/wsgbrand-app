<template>
    <router-link :to="{ name: link.path }" 
        class="btn text-light w-60p border-0 shadow-none flex-fill d-flex flex-column align-items-center">
        <i class="fs-5 lh-sm bi" :class="link.icon"></i>
        <span class="hide-below-325px smaller" v-text="link.name"></span>
    </router-link>
</template>

<script>
export default {
  name: 'BottomMenuLink',
  props: ['link'],
}
</script>

<style lang="scss" scoped>
@import '../../services/styles/variables.scss';
// .router-link-active.router-link-exact-active.btn {
.router-link-active.btn {
    color: $brand-primary !important;
    // i { font-size: 2rem !important; padding-top: 0.25rem; }
    // & span { display: none; }
}
</style>
