<template>
    <router-link :to="{ name: link.path }" :class="linkClasses">
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
            let currentRoute = this.$route.path.toLowerCase();
            const currentRoutePath = this.$route.path.toLowerCase();
            switch (currentRoutePath) {
                case '/factory/purchases/orders':
                case '/factory/purchases/bills':
                case '/factory/sales/dispatches':
                case '/factory/sales/bills':
                    currentRoute = currentRoutePath.substring(0, currentRoutePath.lastIndexOf('/'));
                    break;
                default: break;
            }
            return currentRoute.includes(this.link.name.toLowerCase());
        },
        prefix() {
            return this.$store.getters['authy/getPrefix'];
        },
        getAppColor() {
            switch (this.prefix) {
                case 'factory': return 'active-link-factory';
                case 'vendor': return 'active-link-vendor';
                case 'brand': return 'active-link-brand';            
                default: return 'text-bg-dark';
            }
        },
        linkClasses() {
            let classes = ['btn', 'text-light', 'w-60p', 'border-0', 'pb-1', 'shadow-none', 'flex-fill', 'd-flex', 'flex-column', 'align-items-center'];
            if (this.isActiveLink) {
                classes.push(this.getAppColor);
            }
            return classes;
        },
    }
}
</script>
