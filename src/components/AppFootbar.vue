<template>
    <footer class="footer mt-auto pt-1 shadow" :class="getAppColor" style="height: 60px;">
        <div class="container">
            <div class="d-flex justify-content-around w-100">
                <BottomMenuLink v-for="(link, index) in links" :key="index" :link="link" />
            </div>
        </div>
    </footer>
</template>

<script>
import BottomMenuLink from "@/components/links/BottomMenuLink.vue";

export default {
    name: "AppFootbar",
    components: {
        BottomMenuLink,
    },
    computed: {
        role() {
            return this.$store.getters['authy/getRole'];
        },
        links() {
            return this.$store.getters['repo/getFootbarLinks'](this.role);
        },
        activeLink() {
            return 'BrandDashboard';
        },
        prefix() {
            return this.$store.getters['authy/getPrefix'];
        },
        getAppColor() {
            switch (this.prefix) {
                case 'factory': return 'bg-factory';
                case 'vendor': return 'bg-vendor';
                case 'brand': return 'bg-brand';            
                default: return 'text-bg-dark';
            }
        },
    },
}
</script>

<style>
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>
