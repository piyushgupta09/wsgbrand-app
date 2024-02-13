<template>
    <div class="card">

        <!-- Topbar -->
        <div v-if="product" class="d-flex justify-content-between align-items-center border-bottom">
            <div class="d-flex align-items-center w-100 gap-2">
                <router-link class="btn" :to="{ name: 'BrandProductDetail', params: { product: product.slug } }">
                    <i class="bi bi-chevron-left"></i>
                </router-link>
                <img :src="product.image" class="of-cover w-70p" 
                        data-bs-toggle="modal" data-bs-target="#ledgerImageModal" :data-bs-url="product.preview">
                <div class="flex-fill d-flex" data-bs-toggle="collapse" data-bs-target="#productinfoModal"
                    aria-expanded="false" aria-controls="productinfoModal">
                    <div class="flex-fill d-flex flex-column justify-content-evenly h-100">
                        <span class="fw-bold">
                            {{ product.code }}
                        </span>
                        <div class="d-flex flex-column">
                            <div class="d-flex">
                                <span class="me-1">Ready Done:</span>
                                <div v-if="readyDone" class="d-flex">
                                    <strong>{{ readyDone }}</strong>
                                    <span class="ps-1">pcs</span>
                                </div>
                                <span v-else>Nothing</span>
                            </div>
                            <div class="d-flex">
                                <span class="me-1">Already Dispatch:</span>
                                <div v-if="dispatchDone" class="d-flex">
                                    <strong>{{ dispatchDone }}</strong>
                                    <span class="ps-1">pcs</span>
                                </div>
                                <span v-else>Nothing</span>
                            </div>
                        </div>
                    </div>
                    <button class="btn border-0">
                        <i class="bi bi-chevron-down"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Product Name & Filter Button -->
        <div v-if="product" class="card-header rounded-0">
            <div class="d-flex justify-content-between align-items-center">
                <span class="fw-bold">{{ product.name }}</span>
                <div class="btn btn-dark rounded-0">
                    <i class="bi bi-arrow-down-up" data-bs-toggle="collapse" href="#ledgerFilter" role="button"
                        aria-expanded="false" aria-controls="ledgerFilter"></i>
                </div>
            </div>
        </div>

        <!-- Info Collapse -->
        <div v-if="product" class="collapse" id="productinfoModal">
            <div v-if="product" class="modal-body">
                <p class="text-dark mb-0 border p-1">Name: {{ product.name }}</p>
                <!-- <p class="text-dark mb-0 border p-1">Total Demand: {{ ledger.total_demands }}</p>
                <p class="text-dark mb-0 border p-1">Pending Ready: {{ ledger.ready_balance }}</p>
                <p class="text-dark mb-0 border p-1">Total Orders: {{ ledger.total_orders }}</p> -->
            </div>
        </div>

        <!-- Filters -->
        <div class="collapse" id="ledgerFilter">
            <div class="p-3 border-top" style="background-color: #00000020;">
                <div class="d-flex align-items-center mb-2">
                    <div class="flex-fill">
                        <label for="startDate" class="form-label">Start Date:</label>
                        <input type="date" v-model="startDate"
                            class="form-control rounded-0 border border-secondary border-end-0" id="startDate">
                    </div>

                    <div class="flex-fill">
                        <label for="endDate" class="form-label">End Date:</label>
                        <input type="date" v-model="endDate" class="form-control rounded-0 border border-secondary"
                            id="endDate">
                    </div>
                </div>
                <label class="form-label text-start">Filter By Request Type:</label>
                <div class="btn-group-toggle d-flex justify-content-between" data-toggle="buttons">
                    <label class="btn btn-outline-dark rounded-0 flex-fill border-secondary border-end-0"
                        :class="{ active: ready }" @click="toggleCheckbox('ready')">
                        <input type="checkbox" autocomplete="off" v-model="ready"> Ready
                    </label>
                    <label class="btn btn-outline-dark rounded-0 flex-fill border-secondary border-end-0"
                        :class="{ active: order }" @click="toggleCheckbox('order')">
                        <input type="checkbox" autocomplete="off" v-model="order"> Order
                    </label>
                    <label class="btn btn-outline-dark rounded-0 flex-fill border-secondary border-end-0"
                        :class="{ active: demand }" @click="toggleCheckbox('demand')">
                        <input type="checkbox" autocomplete="off" v-model="demand"> Demand
                    </label>
                    <label class="btn btn-outline-dark rounded-0 flex-fill border-secondary" :class="{ active: adjustment }"
                        @click="toggleCheckbox('adjustment')">
                        <input type="checkbox" autocomplete="off" v-model="adjustment"> Adjustment
                    </label>
                </div>
                <div class="btn-group mt-3 w-100">
                    <button class="btn btn-outline-dark" @click="resetFilters">Reset</button>
                    <button class="btn btn-dark" @click="emitFilters">Apply Filters</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'LedgerFilters',
    props: {
        product: Object,
        readyDone: Number,
        dispatchDone: Number
    },
    data() {
        return {
            ready: true,
            order: true,
            demand: true,
            adjustment: true,
            startDate: '',
            endDate: '',
        }
    },
    mounted() {
        this.setFilterDate();
        this.emitFilters()
    },
    methods: {
        setFilterDate() {
            const today = new Date();
            const nineDaysAgo = new Date();
            nineDaysAgo.setDate(today.getDate() - 9);
            const oneDayAfter = new Date();
            oneDayAfter.setDate(today.getDate() + 1);
            this.startDate = nineDaysAgo.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'
            this.endDate = oneDayAfter.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'
        },
        toggleCheckbox(checkbox) {
            this[checkbox] = !this[checkbox];
        },
        emitFilters() {
            this.$emit('ledger-filters-changed', {
                startDate: this.startDate,
                endDate: this.endDate,
                ready: this.ready,
                order: this.order,
                demand: this.demand,
                adjustment: this.adjustment,
            });
        },
        resetFilters() {
            this.ready = true;
            this.order = true;
            this.demand = true;
            this.adjustment = true;
            this.startDate = '';
            this.endDate = '';
            this.setFilterDate();
            this.emitFilters();
        }
    },
}
</script>
