<template>
    <div class="border-bottom bg-body-tertiary">
        
        <nav class="navbar navbar-expand">
            <div class="navbar-collapse d-flex align-items-center">
                <div class="d-flex align-items-center">
                    <router-link :to="{ name: 'BrandDashboard' }" class="btn">
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
                        <button class="btn fs-4 border-0" @click="toggleSortOrder">
                            <i v-if="sortAsc" class="bi bi-sort-down-alt"></i>
                            <i v-else class="bi bi-sort-up"></i>
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="btn fs-4 border-0" @click="toggleDesign">
                            <i v-if="activeDesign === 1" class="bi bi-grid-fill"></i>
                            <i v-if="activeDesign === 2" class="bi bi-grid-3x3-gap-fill"></i>
                            <i v-if="activeDesign === 3" class="bi bi-list-ul"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="collapse" id="offcanvasSearch">
            <div class="form-floating mx-2 mb-2">
                <input v-model="search" type="search" class="form-control rounded-0" placeholder="Search Stocks" />
                <label for="floatingInput">Search by name or code</label>
            </div>
        </div>

        <div class="collapse" id="offcanvasFilter">
            <div class="card card-body">
                <select v-model="selectedParty" class="form-select py-3 mb-3" aria-label="Filter By Party">
                    <option value="" selected disabled>Filter By Fabricator</option>
                    <option v-for="(party, partyIndex) in parties" :key="partyIndex" :value="party">
                        {{ party }}
                    </option>
                </select>

                <select v-model="selectedOption" class="form-select py-3 mb-3" aria-label="Filter By Color/Options">
                    <option value="" selected disabled>Filter By Color</option>
                    <option v-for="(option, optionIndex) in options" :key="optionIndex" :value="option">
                        {{ option }}
                    </option>
                </select>

                <select v-model="selectedRange" class="form-select py-3 mb-3" aria-label="Filter By Size/Range">
                    <option value="" selected disabled>Filter By Size</option>
                    <option v-for="(range, rangeIndex) in ranges" :key="rangeIndex" :value="range">
                        {{ range }}
                    </option>
                </select>

                <div class="btn-group w-100">
                    <button @click="resetFilters" class="btn btn-outline-dark">Reset</button>
                    <button @click="applyFilters" class="btn btn-dark">Apply</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ProductsTopbar',
    props: {
        title: {
            type: String,
            default: 'Products',
        },
        filters: {
            type: Object,
            default: () => {},
        },
        parties: {
            type: Array,
            default: () => [],
        },
        options: {
            type: Array,
            default: () => [],
        },
        ranges: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            activeDesign: 1,
            sortAsc: true,
            search: '',
            selectedParty: '',
            selectedOption: '',
            selectedRange: '',
        }
    },
    mounted() {
        this.activeDesign = this.filters.activeDesign;
        this.sortAsc = this.filters.sortAsc;
        this.search = this.filters.search;
        this.selectedParty = this.filters.selectedParty;
        this.selectedOption = this.filters.selectedOption;
        this.selectedRange = this.filters.selectedRange;
    },
    watch: {
        search(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.emitFilters()
            }
        },
    },
    methods: {
        toggleDesign() {
            // If activeDesign is 1, set it to 2
            if (this.activeDesign === 1) {
                this.activeDesign = 2;
            } 
            // If activeDesign is 2, set it to 3
            else if (this.activeDesign === 2) {
                this.activeDesign = 3;
            } 
            // If activeDesign is anything else (including 3), set it to 1
            else {
                this.activeDesign = 1;
            }
            this.emitFilters();
        },
        toggleSortOrder() {
            this.sortAsc = !this.sortAsc;
            this.emitFilters();
        },
        applyFilters() {
            this.emitFilters();
        },
        resetFilters() {
            this.search = '';
            this.selectedParty = '';
            this.selectedOption = '';
            this.selectedRange = '';
            this.emitFilters();
        },
        emitFilters() {
            this.$emit('product-filter-updated', {
                search: this.search,
                sortAsc: this.sortAsc,
                activeDesign: this.activeDesign,
                selectedParty: this.selectedParty,
                selectedOption: this.selectedOption,
                selectedRange: this.selectedRange,
            });
        },
    }

}
</script>