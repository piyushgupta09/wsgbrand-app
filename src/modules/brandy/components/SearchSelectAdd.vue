<template>
    <div class="d-flex rounded w-100 h-100 align-items-start">
        <button type="button" class="btn btn-light rounded-0 rounded-start border">
            <i class="bi bi-search px-2"></i>
        </button>
        <div class="w-100">
            <div v-if="selectedParty" class="d-flex justify-content-between align-items-center h-100 overflow-hidden">
                <SelectOptionCard :selectedParty="selectedParty" />
                <button class="btn btn-light border-0 rounded-0" @click="emitRemoveParty(selectedParty.id)">
                    <i class="bi bi-x-lg text-danger px-2"></i>
                </button>
            </div>
            <input v-else id="partySearchInput" type="search" v-model="search"
                class="form-control rounded-0 text-bg-light w-100 h-100 border-start-0 rounded-end" placeholder="Search for a party..."
                autocomplete="off">
            <ul v-if="filteredParties.length" class="list-group rounded-0" style="z-index: 10000;">
                <li v-for="party in filteredParties" :key="party.id" class="list-group-item list-group-flush px-2"
                    @click="emitSelectParty(party.id)">
                    <SelectOptionCard :selectedParty="party" />
                </li>
            </ul>
            <div v-else-if="search.length > 2" class="p-2">No results found</div>
        </div>
    </div>
</template>
  
<script>
import SelectOptionCard from './SelectOptionCard.vue';

export default {
    name: 'SearchSelectAdd',
    props: {
        selectedParty: Object,
        filteredParties: Array,
        modelCreateRoute: String,
    },
    emits: ['removeParty', 'selectParty'],
    data() {
        return {
            search: ''
        };
    },
    methods: {
        emitRemoveParty(partyId) {
            this.$emit('removeParty', partyId);
        },
        emitSelectParty(partyId) {
            this.$emit('selectParty', partyId);
        },
    },
    components: {
        SelectOptionCard,
    },
};
</script>
  