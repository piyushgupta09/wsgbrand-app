<template>
    <div class="">
        <PartiesFilter 
            title="All Parties"
            :filters="filters"
            :statuses="statuses"
            @party-filter-updated="handleFiltersUpdate"
        ></PartiesFilter>
        <ul class="list-group list-group-flush rounded-0">
            <li class="list-group-item p-2" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasCard"
                :data-bs-doc-sid="party.sid" 
                aria-controls="offcanvasCard" 
                v-for="(party, partyIndex) in filteredParties"
                :key="partyIndex">
                <party-card :party="party" />
            </li>
        </ul>
        <offcanvas-card 
            model_id="offcanvasCard" 
            title="Party Details" 
            :list="filteredParties"
        >
            <template v-slot:default="slotProps">
                <party-info :party="slotProps.activeItem" />
                <div class="w-100 py-2 my-2 fw-bold ls-1 font-title text-bg-dark text-center">
                    Assigned Catelogs
                </div>
                <party-details :party="slotProps.activeItem" />
            </template>
        </offcanvas-card>
    </div>
</template>

<script>
import OffcanvasCard from '@/components/OffcanvasCard.vue';
import PartiesFilter from '../components/PartiesFilter.vue';
import PartyCard from '../components/PartyCard.vue';
import PartyInfo from '../components/PartyInfo.vue';
import PartyDetails from '../components/PartyDetails.vue';

export default {
    name: "PartiesPage",
    components: { PartiesFilter, PartyCard, PartyInfo, PartyDetails, OffcanvasCard },
    data() {
        return {
            filters: {
                search: '',
                selectedStatus: 1,
            },
        };
    },
    created() {
        this.$store.dispatch('brandy/fetchParties');
        this.$store.dispatch('brandy/showTopNav');
    },
    computed: {
        parties() {
            return this.$store.getters['brandy/parties'];
        },
        statuses() {
            return [
                { text: 'Active', value: 1 },
                { text: 'Inactive', value: 0 },
            ];
        },
        filteredParties() {
            let parties = this.parties;

            if (this.filters.search) {
                const searchTerm = this.filters.search.toLowerCase();
                parties = parties.filter((party) => {
                    const searchTags = party.tags.split(',');
                    return searchTags.some(tag => tag.toLowerCase().includes(searchTerm.trim()));
                });
            }
            
            if (this.filters.selectedStatus) {
                parties = parties.filter(party => party.active === this.filters.selectedStatus);
            }

            // if (this.filters.sortBys[0].selected) {
            //     parties = parties.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            // }
            
            // if (this.filters.sortBys[1].selected) {
            //     parties = parties.sort((a, b) => b.quantity - a.quantity);
            // }
            
            // if (this.filters.sortBys[2].selected) {
            //     parties = parties.sort((a, b) => b.quantity - a.quantity);
            // }

            return parties;
        },
    },
    methods: {
        handleFiltersUpdate(filters) {
            this.filters = filters;
        },
    },
}
</script>
