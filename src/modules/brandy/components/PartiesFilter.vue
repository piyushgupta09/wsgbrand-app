<template>
    <div class="border-bottom bg-body-tertiary">

        <nav class="navbar navbar-expand py-1">
            <div class="navbar-collapse d-flex align-items-center">
                <div class="d-flex align-items-center">
                    <button class="btn" @click="goBack">
                        <i class="bi bi-chevron-left"></i>
                    </button>
                    <h6 class="mb-0 ms-2">{{ title }}</h6>
                </div>
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item me-3">
                        <button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasSearch" aria-expanded="false" aria-controls="offcanvasSearch">
                            <i class="bi bi-search"></i>
                        </button>
                    </li>
                    <!-- <li class="nav-item">
                        <button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasFilter" aria-expanded="false" aria-controls="offcanvasFilter">
                            <i class="bi bi-funnel"></i>
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasSortBy" aria-expanded="false" aria-controls="offcanvasSortBy">
                            <i class="bi bi-sort-up-alt"></i>
                        </button>
                    </li> -->
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
            <p class="mb-2 fw-bold">Filter by status</p>
            <div class="d-flex w-100 border border-end-0">
                <div class="flex-fill border-end" v-for="(status, statusIndex) in statuses" :key="statusIndex">
                <input type="radio" class="btn-check" :id="'filterby' + getCheckboxId(statusIndex)"
                    :value="status.value"
                    v-model="selectedStatus"
                    @change="emitFilters"
                    name="statusFilter"> 
                <label class="btn btn-outline-dark rounded-0 border-0 w-100" :for="'filterby' + getCheckboxId(statusIndex)">
                    {{ status.text }}
                </label>
                </div>
            </div>
            </div>
        </div>

        <div class="collapse" id="offcanvasSortBy">
            <div class="card card-body">

                <!-- <div class="mb-3"> -->
                    <!-- <p class="mb-2 fw-bold">Sort by</p>
                    <div class="d-flex w-100 border border-end-0">
                        <div class="flex-fill border-end" v-for="(sortBy, sortByIndex) in localSortBys" :key="sortByIndex">
                            <input type="checkbox" class="btn-check" :id="'sortby' + getCheckboxId(sortByIndex)" autocomplete="off"
                                :checked="sortBy.selected"
                                @change="updateSelectedSortBy(sortByIndex)">
                            <label class="btn btn-outline-dark rounded-0 border-0 w-100" :for="'sortby' + getCheckboxId(sortByIndex)">
                                {{ sortBy.selected ? sortBy.name.on : sortBy.name.off }}
                            </label><br>
                        </div>
                    </div> -->
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
    name: 'PartiesFilter',
    emits: ['party-filter-updated'],
    props: {
        title: {
            type: String,
            default: 'Products',
        },
        filters: {
            type: Object,
            default: () => ({}),
        },
        statuses: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            search: this.filters.search || '',
            selectedStatus: this.filters.selectedStatus || null,
            // localSortBys: this.filters.sortBys ? [...this.filters.sortBys] : [],
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1); // Go back to the previous page
        },
        applyFilters() {
            this.$emit('party-filter-updated', {
                search: this.search,
                // sortBys: this.localSortBys,
                selectedStatus: this.selectedStatus,
            });
        },
        resetFilters() {
            this.search = '';
            // this.localSortBys = [...this.filters.sortBys];
            this.selectedStatus = '';
        },
        emitFilters() {
            this.applyFilters();
        },
        getCheckboxId(index) {
            return 'Status' + index;
        },
        updateSelectedSortBy(index) {
            this.localSortBys[index].selected = !this.localSortBys[index].selected;
            this.applyFilters();
        },
    },
}
</script>
