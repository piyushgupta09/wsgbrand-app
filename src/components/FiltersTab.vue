<template>
    <div class="border-bottom bg-body-tertiary">

        <nav class="navbar navbar-expand py-1">
            <div class="navbar-collapse d-flex align-items-center me-3">
                <div class="d-flex align-items-center">
                    <router-link class="btn" :to="{ name: myDashboard }">
                        <i class="bi bi-chevron-left"></i>
                    </router-link>
                    <h6 class="mb-0">{{ title }}</h6>
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
                    <li class="nav-item">
                        <button class="btn btn-outline-dark rounded-0 btn-sm px-2 py-0 ms-2" @click="updatePerPage">
                            0
                        </button>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="collapse" id="offcanvasSearch">
            <div class="card card-body">
                CommingSoon
            </div>
        </div>

        <div class="collapse" id="offcanvasFilter">
            <div class="card card-body">
                Comming Soon
            </div>
        </div>

        <div class="collapse" id="offcanvasSortBy">
            <div class="card card-body">
                Comming Soon
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'FiltersTab',
    emits: ['filter-updated'],
    props: {
        title: {
            type: String,
            default: 'Products',
        },
        filters: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
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
