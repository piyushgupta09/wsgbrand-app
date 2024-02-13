<template>
    <div class="font-title">
        <DispatchFilters
            title="Dispatched Orders"
            :parties="parties"
            :filters="filters"
            :statuses="statuses"
            @dispatch-filter-updated="handleFiltersChange" 
        />
        <ul class="list-group list-group-flush" v-if="Object.keys(filteredDispatches).length">
            <li class="list-group-item p-0" v-for="(dispatch, dispatchIndex) in filteredDispatches" :key="dispatchIndex">
                <transition name="slide" mode="out-in">
                    <DispatchCard :dispatch="dispatch" />
                </transition>
            </li>
            <DispatchDetails :dispatches="filteredDispatches" />
            <DispatchStockIn :dispatches="filteredDispatches" />
        </ul>
        <EmptyList v-else title="No Dispatch Available"></EmptyList>
    </div>
</template>
  
<script>
import Axios from '@/services/axios';
import EmptyList from '@/components/EmptyList.vue';
import DispatchCard from '@/components/DispatchCard.vue';
import DispatchFilters from '@/components/DispatchFilters.vue';
import DispatchDetails from '@/components/DispatchDetails.vue';
import DispatchStockIn from '@/components/DispatchStockIn.vue';

export default {
    name: 'DispatchesPage',
    components: {
        DispatchCard,
        EmptyList,
        DispatchDetails,
        DispatchFilters,
        DispatchStockIn,
    },
    data() {
        return {
            page: 1,
            isFetching: false,
            dispatches: [],
            
            // Filter
            filters: {
                search: '',
                selectedParty: '',
                selectedStatus: 'pending',
                sortBys: [
                    { name: { on: 'Latest Dispatch', off: 'Oldest Dispatch' }, selected: true },
                    { name: { on: 'Highest Quantity', off: 'Lowest Quantity' }, selected: false },
                    { name: { on: 'Maximum Dispatch', off: 'Lowest Dispatch' }, selected: false },
                ],
            },
        };
    },
    mounted() {
        this.loadMore();
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    watch: {
        parties: {
            handler(newValue) {
                if (newValue.length) {
                    // Select the first party by default if userType is factory or vendor
                    let userType = this.$store.getters['authy/getPrefix'];
                    if (userType === 'factory' || userType === 'vendor') {
                        this.selectedParty = newValue[0].sid; // Assuming 'selectedParty' is the correct data property
                    }
                }
            },
            immediate: true,
        },
        storeDispatches: {
            handler(newValue) {
                this.dispatches = newValue;
                this.page = 1;
            },
            immediate: true,
        },
    },
    computed: {
        parties() {
            if (this.dispatches && !this.dispatches.length) {
                return [];
                
            }
            const localDispatches = this.dispatches;
            const uniquePartiesMap = {};
            const uniqueParties = [];

            if (localDispatches) {
                localDispatches.forEach(dispatch => {
                    // Use sid as the key in the map.
                    const sid = dispatch.party.sid;
                    // If this sid hasn't been added to uniqueParties, add it.
                    if (!uniquePartiesMap[sid]) {
                        uniqueParties.push(dispatch.party);
                        uniquePartiesMap[sid] = true; // Mark this sid as added.
                    }
                });
            }
            
            return uniqueParties;
        },
        statuses() {
            return [
                { text: 'Dispatched', value: 'pending' },
                { text: 'Received', value: 'received' },
            ];
        },
        pendingDispatch() {
            return this.dispatches.filter(dispatch => dispatch.status === 'pending')
        },
        filteredDispatches() {
            if (this.dispatches && !this.dispatches.length) {
                return [];
                
            }
            let dispatches = this.dispatches;

            if (this.filters.search) {
                const searchTerm = this.filters.search.toLowerCase();
                dispatches = dispatches.filter((dispatch) => {
                    const stockTags = dispatch.tags.split(',');
                    return stockTags.some(tag => tag.toLowerCase().includes(searchTerm.trim()));
                });
            }
            
            if (this.filters.selectedParty) {
                dispatches = dispatches.filter(dispatch => dispatch.party.sid === this.filters.selectedParty);
            }

            if (this.filters.selectedStatus) {
                dispatches = dispatches.filter(dispatch => dispatch.status === this.filters.selectedStatus);
            }

            if (this.filters.sortBys[0].selected) {
                dispatches = dispatches.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            }
            
            if (this.filters.sortBys[1].selected) {
                dispatches = dispatches.sort((a, b) => b.quantity - a.quantity);
            }
            
            if (this.filters.sortBys[2].selected) {
                dispatches = dispatches.sort((a, b) => b.quantity - a.quantity);
            }

            return dispatches;
        },
        storeDispatches() {
            return this.$store.getters['brandy/dispatches'];
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
            
            Axios.get(`dispatches?page=${this.page}`)
                .then((response) => {
                    if (response.data.status === 'ok') {
                        this.dispatches = [...this.dispatches, ...response.data.data.data];
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
    },
}
</script>
  