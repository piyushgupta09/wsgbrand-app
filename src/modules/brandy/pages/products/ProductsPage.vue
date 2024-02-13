<template>
    <div v-if="products" class="w-100 overflow-hidden font-title">

        <products-topbar 
            :title="`Products (${filteredProducts.length})`"
            :filters="filters" 
            :parties="parties" 
            :options="options"
            :ranges="ranges" 
            @product-filter-updated="handleFilters" 
        />

        <div v-if="filteredProducts && filteredProducts.length">
            <div class="row m-0" 
                :class="{ 
                    'row-cols-2': filters.activeDesign === 1, 
                    'row-cols-3': filters.activeDesign === 2, 
                    'row-cols-1': filters.activeDesign === 3 
                }">
                <product-card :product="product" :activeDesign="filters.activeDesign" :productIndex="productIndex"
                    v-for="(product, productIndex) in filteredProducts" :key="productIndex" />
            </div>
        </div>
        <empty-list v-else title="No Products Available" />

    </div>
    <page-loading v-else />
</template>

<script>
import PageLoading from '@/components/PageLoading.vue'
import ProductCard from '../../components/ProductCard.vue';
import ProductsTopbar from '../../components/ProductsTopbar.vue';
import EmptyList from '@/components/EmptyList.vue';

export default {
    name: "ProductsPage",
    components: { 
        EmptyList,
        PageLoading, 
        ProductCard, 
        ProductsTopbar 
    },
    data() {
        return {
            filters: {
                activeDesign: 1,
                sortAsc: true,
                search: '',
                selectedParty: '',
                selectedOption: '',
                selectedRange: '',
            },
        };
    },
    created() {
        this.$store.dispatch('brandy/fetchProducts');
        },
    computed: {
        products() {
            return this.$store.getters['brandy/products'].data;
        },
        parties() {
            const localProducts = this.products;
            const uniqueParties = new Set();
            if (localProducts) {
                localProducts.forEach(product => {
                    const assignedParties = product.assigned_parties || [];
                    assignedParties.forEach(party => {
                        if (party.name) {
                            uniqueParties.add(party.name);
                        }
                    });
                });
            }
            return Array.from(uniqueParties);
        },
        options() {
            const localProducts = this.products;
            const uniqueOptions = new Set();
            if (localProducts) {
                localProducts.forEach(product => {
                    const options = product.options || [];
                    options.forEach(option => {
                        if (option.name) {
                            uniqueOptions.add(option.name);
                        }
                    });
                });
            }
            return Array.from(uniqueOptions);
        },
        ranges() {
            const localProducts = this.products;
            const uniqueRanges = new Set();
            if (localProducts) {
                localProducts.forEach(product => {
                    const ranges = product.ranges || [];
                    ranges.forEach(range => {
                        if (range.name) {
                            uniqueRanges.add(range.name);
                        }
                    });
                });
            }
            return Array.from(uniqueRanges);
        },
        filteredProducts() {
            let products = this.products;

            if (this.filters.search) {
                const searchLowerCase = this.filters.search.toLowerCase();
                products = products.filter((product) => {
                    // Assuming 'tags' is a string property of the product
                    // Add or modify conditions here as needed to match your product structure
                    return product.tags && typeof product.tags === 'string' &&
                        product.tags.toLowerCase().includes(searchLowerCase);
                });
            }

            if (this.filters.sortAsc) {
                products.sort((a, b) => a.code.localeCompare(b.code));
            } else {
                products.sort((a, b) => b.code.localeCompare(a.code));
            }

            if (this.filters.selectedParty) {
                products = products.filter((product) => {
                    const assignedParties = product.assigned_parties || [];
                    return assignedParties.some(party => party.name === this.filters.selectedParty);
                });
            }

            if (this.filters.selectedOption) {
                products = products.filter((product) => {
                    const options = product.options || [];
                    return options.some(option => option.name === this.filters.selectedOption);
                });
            }

            if (this.filters.selectedRange) {
                products = products.filter((product) => {
                    const ranges = product.ranges || [];
                    return ranges.some(range => range.name === this.filters.selectedRange);
                });
            }

            return products;
        },
    },
    methods: {
        handleFilters(filters) {
            this.filters = filters;
        },
        // for reference only
        sortByStock(order) {

            // Sort the (filtered) products based on filters.sortAsc
            // if (this.filters.sortAsc) {
            //     products.sort((a, b) => a.sid - b.sid);
            // } else {
            //     products.sort((a, b) => b.sid - a.sid);
            // }

            this.sortOrder = order;
            this.filteredStocks.sort((a, b) => {
                const stockQuantityA = parseInt(a.stock);
                const stockQuantityB = parseInt(b.stock);

                if (order === 'asc') {
                    return stockQuantityA - stockQuantityB;
                } else if (order === 'desc') {
                    return stockQuantityB - stockQuantityA;
                }

                return 0; 
            });
        },
    },
}
</script>
