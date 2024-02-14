<template>
    <ul class="nav nav-pills nav-fill border-bottom">
        <li class="nav-item" v-for="link in links" :key="link.name">
            <router-link :to="{ name: link.name }" class="nav-link rounded-0 fw-500 ls-1 small text-bg-light"
                :class="[isLinkActive(link.name) ? getAppColor : '']">
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
    computed: {
        prefix() {
            return this.$store.getters['authy/getPrefix'];
        },
        getAppColor() {
            switch (this.prefix) {
                case 'factory': return 'active-link-factory text-white';
                case 'vendor': return 'active-link-vendor text-white';
                case 'brand': return 'active-link-brand text-white';
                default: return 'text-bg-dark';
            }
        },
    }
}
</script>


