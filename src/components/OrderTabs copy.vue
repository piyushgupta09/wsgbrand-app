<template>
    <ul class="nav nav-pills nav-fill border-bottom">
        <li class="nav-item" v-for="(tab, tabIndex) in tabs" :key="tabIndex">
            <router-link 
                :to="{ name: getMyLink(tab.type) }" 
                class="nav-link rounded-0 fw-500 small text-dark" 
                :class="{ 'active text-white': isLinkActive(tab.type) }"
            >
                {{ tab.name }}
            </router-link>
        </li>
        <li v-if="prefix !== 'brand'" class="nav-item">
            <router-link 
                :to="{ name: getMyLink('all-orders') }" 
                class="nav-link rounded-0 fw-500 small text-dark" 
                :class="{ 'active text-white': isLinkActive('all-orders') }"
            >
                All Orders
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'OrderTabs',
    data() {
        return {
            tabs: [
                { name: 'Sale Order', type: 'sale' },
                { name: 'Purchase Order', type: 'purchase' },
            ]
        }
    },
    computed: {
        prefix() {
            return this.$store.getters['authy/getPrefix'];
        },
        myDashboard() {
            const prefix = this.capitalizeFirstLetter(this.prefix);
            return `${prefix}Dashboard`;
        },
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        },
        isLinkActive(type) {
            const routeName = this.getMyLink(type);
            return this.$route.name === routeName;
        },
        getMyLink(type) {
            switch (type) {
                case 'sale': return this.getSaleLink();
                case 'purchase': return this.getPurchaseLink();
                case 'all-orders': return this.getAllOrdersLink();
                default: return this.myDashboard;
            }
        },
        getSaleLink() {
            return this.prefix === 'brand' ? 'BrandSaleOrders' :
                   this.prefix === 'factory' ? 'FactorySaleOrders' :
                   this.prefix === 'vendor' ? 'VendorSaleOrders' :
                   this.myDashboard;
        },
        getPurchaseLink() {
            return this.prefix === 'brand' ? 'BrandPurchaseOrders' :
                   this.prefix === 'factory' ? 'FactoryPurchaseOrders' :
                   this.prefix === 'vendor' ? 'VendorPurchaseOrders' :
                   this.myDashboard;
        },
        getAllOrdersLink() {
            return this.prefix === 'factory' ? 'FactoryOrders' :
                   this.prefix === 'vendor' ? 'VendorOrders' :
                   this.myDashboard;
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/services/styles/variables.scss';
.router-link-active {
    color: $brand-primary !important;
    background-color: #f2f2f2 !important;
}
</style>