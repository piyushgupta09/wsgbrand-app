<template>
    <div class="font-title">
        <OrderFilters
            :title="title"
            :filters="filters"
            :parties="parties"
            @order-filter-updated="handleFiltersChange" 
        />
        <OrderTabs :links="links"></OrderTabs>
        <ul class="list-group list-group-flush" v-if="Object.keys(filteredPurchases).length">
            <li class="list-group-item p-0" v-for="(purchase, purchaseIndex) in filteredPurchases" :key="purchaseIndex">
                <transition name="slide" mode="out-in">
                    <PurchaseCard :purchase="purchase" />
                </transition>
            </li>
            <PurchaseCardDetail :purchases="filteredPurchases"></PurchaseCardDetail>
        </ul>
        <EmptyList v-else title="No Purchase Available"></EmptyList>
    </div>
</template>

<script>
import Axios from '@/services/axios'
import EmptyList from '@/components/EmptyList.vue';
import OrderTabs from '@/components/OrderTabs.vue';
import PurchaseCard from '@/components/PurchaseCard.vue';
import OrderFilters from '@/components/OrderFilters.vue';
import PurchaseCardDetail from '@/components/PurchaseCardDetail.vue';

export default {
    name: 'PurchaseBillsSection',
    props: {
        module: {
            type: String,
            required: true,
        },
        links: {
            type: Array,
            required: true,
        },
    },
    components: { 
        EmptyList,
        OrderTabs,
        PurchaseCard, 
        OrderFilters,
        PurchaseCardDetail, 
    },
    data() {
        return {
            title: 'Purchases',
            page: 1,
            isFetching: false,
            purchases: [],
            filters: {
                date: '',
                search: '',
                selectedStatus: 'received',
                selectedParty: '',
                perPage: 10,
                sortBys: [
                    { name: 'Latest Bill', selected: true, value: 'created_at', order: 'desc'},
                    { name: 'Oldest Bill', selected: false, value: 'created_at', order: 'asc'},
                    { name: 'Highest Amount', selected: false, value: 'total', order: 'desc'},
                    { name: 'Lowest Amount', selected: false, value: 'total', order: 'asc'},
                    { name: 'Biggest Volume', selected: false, value: 'quantity', order: 'asc'},
                    { name: 'Smallest Volume', selected: false, value: 'quantity', order: 'desc'},
                ],
            },
        }
    },
    watch: {
        filters: {
            handler() {
                console.log('Filters changed');
                this.page = 1;
                this.purchases = [];
                this.loadMore();
            },
            deep: true,
        },
    },
    mounted() {
        this.loadMore();
        window.addEventListener('scroll', this.handleScroll);
        this.title = this.$store.getters['authy/getPrefix'] === 'brand' ? 'Purchases' : 'Sales';
        if (this.$route.query) {
            this.filters.search = this.$route.query.search || '';
        }
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    computed: {
        parties() {
            const localPurchases = this.purchases;
            const uniquePartiesMap = {};
            const uniqueParties = [];

            if (localPurchases) {
                localPurchases.forEach(purchase => {
                    // Use sid as the key in the map.
                    const sid = purchase.party.sid;
                    // If this sid hasn't been added to uniqueParties, add it.
                    if (!uniquePartiesMap[sid]) {
                        uniqueParties.push(purchase.party);
                        uniquePartiesMap[sid] = true; // Mark this sid as added.
                    }
                });
            }
            
            return uniqueParties;
        },
        filteredPurchases() {
            let purchases = this.purchases;

            // if (this.filters.search) {
            //     const searchTerm = this.filters.search.toLowerCase();
            //     purchases = purchases.filter((purchase) => {
            //         const stockTags = purchase.tags.split(',');
            //         return stockTags.some(tag => tag.toLowerCase().includes(searchTerm.trim()));
            //     });
            // }
            
            // if (this.filters.selectedParty) {
            //     purchases = purchases.filter(purchase => purchase.party.sid === this.filters.selectedParty);
            // }

            // if (this.filters.selectedStatus) {
            //     purchases = purchases.filter(purchase => purchase.status === this.filters.selectedStatus);
            // }

            // if (this.filters.sortBys[0].selected) {
            //     purchases = purchases.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            // }
            
            // if (this.filters.sortBys[1].selected) {
            //     purchases = purchases.sort((a, b) => b.quantity - a.quantity);
            // }
            
            // if (this.filters.sortBys[2].selected) {
            //     purchases = purchases.sort((a, b) => b.quantity - a.quantity);
            // }

            return purchases;
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

            const params = new URLSearchParams({
                page: this.page,
                search: this.filters.search,
                status: this.filters.selectedStatus,
                party: this.filters.selectedParty,
            });

            // Assuming you have only one selected sort option at a time
            const selectedSortOption = this.filters.sortBys.find(option => option.selected);
            if (selectedSortOption) {
                params.append('sortby', selectedSortOption.value);
                params.append('sortorder', selectedSortOption.order);
            }

            
            Axios.get(`purchases?${params}&perpage=${this.filters.perPage}`).then(response => {
                    if (response.data.status === 'ok') {
                        this.purchases = [...this.purchases, ...response.data.data.data];
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
        },
    }
}
</script>
