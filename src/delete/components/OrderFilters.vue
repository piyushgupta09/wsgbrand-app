<template>
    <div class="border-bottom bg-body-tertiary">

        <nav class="navbar navbar-expand py-1">
            <div class="navbar-collapse d-flex align-items-center">
                <div class="d-flex align-items-center">
                    <router-link class="btn" :to="{ name: myDashboard }">
                        <i class="bi bi-chevron-left"></i>
                    </router-link>
                    <h6 class="mb-0 ms-2">{{ title }}</h6>
                </div>
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item">
                        <button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasSearch" aria-expanded="false" aria-controls="offcanvasSearch">
                            <i class="bi bi-search"></i>
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasFilter" aria-expanded="false" aria-controls="offcanvasFilter">
                            <i class="bi bi-funnel"></i>
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasSortBy" aria-expanded="false" aria-controls="offcanvasSortBy">
                            <i class="bi bi-sort-up-alt"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="collapse" id="offcanvasSearch">
            <div class="form-floating mx-2 mb-2">
                <input v-model.lazy="search" type="search" class="form-control rounded-0" placeholder="Search Stocks" @change="emitFilters" />
                <label for="floatingInput">Search by name or code</label>
            </div>
        </div>

        <div class="collapse" id="offcanvasFilter">
            <div class="card card-body">

                <select v-if="isBrand" v-model="selectedParty" class="form-select py-3 mb-3" aria-label="Filter By Party">
                    <option value="" selected disabled>Filter By Fabricator</option>
                    <option v-for="(party, partyIndex) in parties" :key="partyIndex" :value="party.sid">
                        {{ party.name }}
                    </option>
                </select>

                <!-- <div class="mb-3"> -->
                    <p class="mb-2 fw-bold">Filter by status</p>
                    <div class="d-flex w-100 border border-end-0">
                        <div class="flex-fill border-end" v-for="(status, statusIndex) in statuses" :key="statusIndex">
                            <input type="checkbox" class="btn-check" :id="'filterby' + getCheckboxId(statusIndex)" autocomplete="off"
                                :value="status.value"
                                :checked="status.value === selectedStatus"
                                @change="updateSelectedStatus(status.value)">
                            <label class="btn btn-outline-dark rounded-0 border-0 w-100" :for="'filterby' + getCheckboxId(statusIndex)">
                                {{ status.text }}
                            </label><br>
                        </div>
                    </div>
                <!-- </div> -->

                <!-- <div class="btn-group w-100">
                    <button @click="resetFilters" class="btn btn-outline-dark">Reset</button>
                    <button @click="applyFilters" class="btn btn-dark">Apply</button>
                </div> -->
            </div>
        </div>

        <div class="collapse" id="offcanvasSortBy">
            <div class="card card-body">

                <!-- <div class="mb-3"> -->
                    <p class="mb-2 fw-bold">Sort by</p>
                    <div class="d-flex w-100 border border-end-0">
                        <div class="flex-fill border-end" v-for="(sortBy, sortByIndex) in localSortBys" :key="sortByIndex">
                            <input type="checkbox" class="btn-check" :id="'sortby' + getCheckboxId(sortByIndex)" autocomplete="off"
                                :checked="sortBy.selected"
                                @change="updateSelectedSortBy(sortByIndex)">
                            <label class="btn btn-outline-dark rounded-0 border-0 w-100" :for="'sortby' + getCheckboxId(sortByIndex)">
                                {{ sortBy.selected ? sortBy.name.on : sortBy.name.off }}
                            </label><br>
                        </div>
                    </div>
                <!-- </div> -->

                <!-- <div class="btn-group w-100">
                    <button @click="resetFilters" class="btn btn-outline-dark">Reset</button>
                    <button @click="applyFilters" class="btn btn-dark">Apply</button>
                </div> -->

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'OrderFilters',
    emits: ['order-filter-updated'],
    props: {
        title: {
            type: String,
            default: 'Products',
        },
        filters: {
            type: Object,
            default: () => ({}),
        },
        parties: {
            type: Array,
            default: () => [],
        },
        statuses: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            search: this.filters.search || '',
            localSortBys: this.filters.sortBys ? [...this.filters.sortBys] : [],
            selectedParty: this.filters.selectedParty || '',
            selectedStatus: this.filters.selectedStatus || '',
        }
    },
    methods: {
        applyFilters() {
            this.$emit('order-filter-updated', {
                search: this.search,
                sortBys: this.localSortBys,
                selectedParty: this.selectedParty,
                selectedStatus: this.selectedStatus,
            });
        },
        resetFilters() {
            this.search = '';
            this.localSortBys = [...this.filters.sortBys];
            this.selectedParty = '';
            this.selectedStatus = '';
        },
        emitFilters() {
            this.applyFilters();
        },
        getCheckboxId(index) {
            return `btn-check-outlined-${index}`;
        },
        updateSelectedStatus(value) {
            this.selectedStatus = this.selectedStatus === value ? '' : value;
            this.applyFilters();
        },
        updateSelectedSortBy(index) {
            this.localSortBys[index].selected = !this.localSortBys[index].selected;
            this.applyFilters();
        },
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
    },
    computed: {
        isBrand() {
            return this.$store.getters['authy/getPrefix'] === 'brand';
        },
        myDashboard() {
            const prefix = this.capitalizeFirstLetter(this.$store.getters['authy/getPrefix']);
            return `${prefix}Dashboard`;
        },
    },
}
</script>
