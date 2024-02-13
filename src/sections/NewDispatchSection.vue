<template>
    <div class="font-title">
        <OrderFilters
            :title="title"
            :filters="filters"
            :parties="parties"
            :statuses="statuses"
            @order-filter-updated="handleFiltersChange" 
        />
        <OrderTabs :links="links"></OrderTabs>
        <ul class="list-group list-group-flush" v-if="Object.keys(dispatches).length">
            <li class="list-group-item p-0" v-for="(dispatch, dispatchIndex) in dispatches" :key="dispatchIndex">
                <transition name="slide" mode="out-in">
                    <DispatchCard :dispatch="dispatch" />
                </transition>
            </li>
            <DispatchDetails :dispatches="dispatches" />
            <DispatchStockIn :dispatches="dispatches" />
        </ul>
        <EmptyList v-else title="No Dispatch Available"></EmptyList>
    </div>
</template>
  
<script>
import Axios from '@/services/axios';
import EmptyList from '@/components/EmptyList.vue';
import OrderTabs from '@/components/OrderTabs.vue';
import DispatchCard from '@/components/DispatchCard.vue';
import OrderFilters from '@/components/OrderFilters.vue';
import DispatchDetails from '@/components/DispatchDetails.vue';
import DispatchStockIn from '@/components/DispatchStockIn.vue';
import Swal from 'sweetalert2';

export default {
    name: 'NewDispatchSection',
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
        DispatchCard,
        OrderTabs,
        EmptyList,
        DispatchDetails,
        OrderFilters,
        DispatchStockIn,
    },
    data() {
        return {
            title: 'New Dispatches',
            page: 1,
            isFetching: false,
            dispatches: [],
            filters: {
                date: '',
                search: '',
                selectedStatus: 'pending',
                selectedParty: '',
                perPage: 10,
                sortBys: [
                    { name: 'Latest Dispatch', selected: true, value: 'created_at', order: 'desc'},
                    { name: 'Oldest Dispatch', selected: false, value: 'created_at', order: 'asc'},
                    { name: 'Highest Quantity', selected: false, value: 'quantity', order: 'desc'},
                    { name: 'Lowest Quantity', selected: false, value: 'quantity', order: 'asc'},
                ],
            },
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        if (this.$route.query && this.$route.query.search) {
            this.filters.search = this.$route.query.search || '';
        }
        this.loadMore();
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
        filters: {
            handler() {
                console.log('Filters changed');
                this.page = 1;
                this.dispatches = [];
                this.loadMore();
            },
            deep: true,
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

            Axios.get(`dispatches?${params}&perpage=${this.filters.perPage}`).then(response => {
                    if (response.data.status === 'ok') {
                        this.dispatches = [...this.dispatches, ...response.data.data.data];
                        this.page++;
                        this.isFetching = false;
                    }
                    else if (response.data.status === 'error') {
                        this.isFetching = false;
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: response.data.message,
                        });
                    }
                    else {
                        this.isFetching = false;
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong! Please try again',
                        });
                    }
                }).catch((error) => {
                    this.isFetching = false;
                    console.log(error);
                });
        },
        handleFiltersChange(filters) {
            this.filters = filters;
        },
    },
}
</script>
  