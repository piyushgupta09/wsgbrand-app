<template>
    <footer class="footer mt-auto pt-1 shadow bg-dark" style="height: 60px;">
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
    },
}
</script>

<style>
.router-link-active.router-link-exact-active.nav-link {
    color: #0D6EFD;
}
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    /* Add any additional styling as needed */
}
</style>
