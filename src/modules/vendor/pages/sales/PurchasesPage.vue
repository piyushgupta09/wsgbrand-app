<template>
    <div class="font-title">
        <PurchaseFilter 
            :title="title"
            :parties="parties"
            :filters="filters"
            @purchase-filter-updated="handleFiltersChange">
        </PurchaseFilter>
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
import PurchaseCard from '@/components/PurchaseCard.vue';
import PurchaseFilter from '@/components/PurchaseFilter.vue';
import PurchaseCardDetail from '@/components/PurchaseCardDetail.vue';

export default {
    name: 'PurchasePage',
    components: { 
        EmptyList,
        PurchaseCard, 
        PurchaseFilter,
        PurchaseCardDetail, 
    },
    data() {
        return {
            title: 'Purchases',
            page: 1,
            isFetching: false,
            purchases: [],
            filters: {
                search: '',
                selectedParty: '',
                // selectedStatus: 'pending',
                // sortBys: [
                //     { name: { on: 'Latest Purchase', off: 'Oldest Purchase' }, selected: true },
                //     { name: { on: 'Highest Quantity', off: 'Lowest Quantity' }, selected: false },
                //     { name: { on: 'Maximum Purchase', off: 'Lowest Purchase' }, selected: false },
                // ],
            }
        }
    },
    mounted() {
        this.loadMore();
        window.addEventListener('scroll', this.handleScroll);
        this.title = this.$store.getters['authy/getPrefix'] === 'brand' ? 'Purchases' : 'Sales';
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
                    const sid = purchase.party_sid;
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

            if (this.filters.search) {
                const searchTerm = this.filters.search.toLowerCase();
                purchases = purchases.filter((purchase) => {
                    const stockTags = purchase.tags.split(',');
                    return stockTags.some(tag => tag.toLowerCase().includes(searchTerm.trim()));
                });
            }
            
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
            
            Axios.get(`purchases?page=${this.page}`)
                .then((response) => {
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
