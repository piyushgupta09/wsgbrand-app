<template>
    <ul class="nav nav-pills nav-fill border-bottom">
        <li class="nav-item" v-for="link in links" :key="link.name">
            <router-link 
                :to="{ name: link.name }" 
                class="nav-link rounded-0 fw-500 ls-1 small text-bg-light" 
                :class="{ 'active text-white': isLinkActive(link.name) }"
            >
                {{ link.label }}
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'OrderTabs',
    props: {
        links: {
            type: Array,
            required: true
        }
    },
    methods: {
        isLinkActive(routeName) {
            return this.$route.name === routeName;
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/services/styles/variables.scss';
.router-link-active.router-link-exact-active {
    color: $brand-primary !important;
    background-color: #ffffff !important;
}
</style>
