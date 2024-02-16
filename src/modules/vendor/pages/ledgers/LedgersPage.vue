<template>
    <div class="w-100" style="overflow-x: hidden;">
        <RunningFilter :title="filteredStocks.length + ' / ' + ledgers.length" 
        @order-filter-changed="handleFiltersChange" />
        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-2">
            <product-card 
                v-for="(ledger, index) in filteredStocks" :key="index" 
                :ledger="ledger"
                :product="ledger.product" :productIndex="index" />
        </div>
    </div>
</template>

<script>
import Axios from '@/services/axios';
import RunningFilter from '../../components/RunningFilter.vue';
import ProductCard from '../../components/ProductCard.vue';

export default {
    name: "LedgersPage",
    components: {
        RunningFilter,
        ProductCard,
    },
    data() {
        return {
            filters: [],
            page: 1,
            isFetching: false,
            ledgers: [],
        };
    },
    mounted() {
        this.loadMore(); // Initial load
        window.addEventListener('scroll', this.handleScroll); // Add scroll event listener
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll); // Clean up the event listener
    },
    computed: {
        filteredStocks() {
            let tempStocks = [];
            if (this.filters.showHighStock) {
                tempStocks = this.ledgers.filter(catalog => catalog.balance_qty);
            }
            else {
                tempStocks = this.ledgers.filter(catalog => !catalog.balance_qty);
            }
            if (this.filters.tagSearch) {
                const searchTerm = this.filters.tagSearch.toLowerCase();
                tempStocks = tempStocks.filter((stock) => {
                    const stockTags = stock.product.tags.split(',');
                    console.log(stockTags);
                    return stockTags.some(tag => tag.toLowerCase().includes(searchTerm.trim()));
                });
            }
            if (this.filters.filterBy !== 'default') {
                tempStocks = tempStocks.filter(catalog => catalog.last_activity === this.filters.filterBy);
            }
            if (this.filters.sortBys && this.filters.sortBys.length) {
                this.filters.sortBys.forEach(sortBy => {
                    if (sortBy.selected) {
                        switch (sortBy.value) {
                            case 'balance':
                                tempStocks = tempStocks.slice().sort((a, b) => a.balance_qty - b.balance_qty);
                                break;
                            case 'ready':
                                tempStocks = tempStocks.slice().sort((a, b) => a.readyable_qty - b.readyable_qty);
                                break;
                            case 'demand':
                                tempStocks = tempStocks.slice().sort((a, b) => a.demandable_qty - b.demandable_qty);
                                break;
                            case 'disptach':
                                tempStocks = tempStocks.slice().sort((a, b) => a.dispatchable_qty - b.dispatchable_qty);
                                break;
                            default: break;
                        }
                    }
                });
            }
            return tempStocks;
        },
    },
    methods: {
        handleScroll() {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (clientHeight + scrollTop >= scrollHeight - 5) { // Check if near bottom
                this.loadMore();
            }
        },
        loadMore() {
            if (this.isFetching)
                return;
            this.isFetching = true;
            
            Axios.get(`party/ledgers?page=${this.page}`)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        this.ledgers = [...this.ledgers, ...response.data.data.data];
                        this.page++;
                        this.isFetching = false;
                    }
                    else if (response.data.status === 'error') {
                        this.isFetching = false;
                        alert(response.data.message);
                    }
                    else {
                        this.isFetching = false;
                        alert('Something went wrong! Please try again');
                    }
                }).catch((error) => {
                    this.isFetching = false;
                    console.log(error);
                    alert('Something went wrong! Please try again');
                });
        },
        handleFiltersChange(filters) {
            this.filters = filters;
        }
    },

}
</script> 
