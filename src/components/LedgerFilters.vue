<template>
    <div class="card">

        <!-- Topbar -->
        <div v-if="product" class="d-flex justify-content-between align-items-center border-bottom">
            <div class="d-flex align-items-center w-100 gap-2">
                <button class="btn" @click="myProductPage">
                    <i class="bi bi-chevron-left"></i>
                </button>
                <img :src="product.image" class="of-cover w-70p" 
                        data-bs-toggle="modal" data-bs-target="#ledgerImageModal" :data-bs-url="product.preview">
                <div class="flex-fill d-flex" data-bs-toggle="collapse" data-bs-target="#productinfoModal"
                    aria-expanded="false" aria-controls="productinfoModal">
                    <div class="flex-fill d-flex flex-column justify-content-evenly h-100">
                        <span class="fw-bold">
                            {{ product.code }}
                        </span>
                        <div class="d-flex flex-column">
                            <div v-if="info.label1" class="d-flex">
                                <span class="me-1">{{ info.label1 }}:</span>
                                <div v-if="info.value1" class="d-flex">
                                    <strong>{{ info.value1 }}</strong>
                                    <span class="ps-1">pcs</span>
                                </div>
                                <span v-else>Nothing</span>
                            </div>
                            <div class="d-flex">
                                <span v-if="info.label2" class="me-1">{{ info.label2 }}:</span>
                                <div v-if="info.value2" class="d-flex">
                                    <strong>{{ info.value2 }}</strong>
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
                <div class="btn-group">
                    <router-link class="btn btn-outline-dark" :to="{ name: myChatPageRouteName }">
                        <i class="bi bi-chat-dots fs-5 lh-1"></i>
                    </router-link>
                    <button class="btn btn-outline-dark" data-bs-toggle="collapse" href="#ledgerFilter" role="button"
                            aria-expanded="false" aria-controls="ledgerFilter">
                        <i class="bi bi-arrow-down-up"></i>
                    </button>
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
                <div class="btn-group-toggle d-flex flex-wrap justify-content-between" data-toggle="buttons">
                    <label class="btn btn-outline-dark rounded-0 flex-fill border-secondary border-end-0"
                        :class="{ active: ready }" @click="toggleCheckbox('ready')">
                        <input type="checkbox" autocomplete="off" v-model="ready"> Ready
                    </label>
                    <label v-if="myPrefix !== 'vendor'" class="btn btn-outline-dark rounded-0 flex-fill border-secondary border-end-0"
                        :class="{ active: order }" @click="toggleCheckbox('order')">
                        <input type="checkbox" autocomplete="off" v-model="order"> Order
                    </label>
                    <label v-if="myPrefix !== 'vendor'" class="btn btn-outline-dark rounded-0 flex-fill border-secondary border-end-0"
                        :class="{ active: demand }" @click="toggleCheckbox('demand')">
                        <input type="checkbox" autocomplete="off" v-model="demand"> Demand
                    </label>
                    <label v-if="myPrefix === 'vendor'" class="btn btn-outline-dark rounded-0 flex-fill border-secondary" :class="{ active: dispatch }"
                        @click="toggleCheckbox('dispatch')">
                        <input type="checkbox" autocomplete="off" v-model="dispatch"> Dispatch
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
    props: ['product', 'info'],
    data() {
        return {
            ready: true,
            order: true,
            demand: true,
            dispatch: true, // new
            adjustment: true,
            startDate: '',
            endDate: '',
        }
    },
    mounted() {
        this.setFilterDate();
        this.emitFilters()
    },
    computed: {
        myPrefix() {
            return this.$store.getters['authy/getPrefix'];
        },
        myChatPageRouteName() {
            if (this.myPrefix === 'brand') {
                return 'BrandLedgerChats';
            } else if (this.myPrefix === 'factory') {
                return 'FactoryLedgerChats';
            } else if (this.myPrefix === 'vendor') {
                return 'VendorLedgerChats';
            }
            
            return 'Home';
        }
    },
    methods: {
        myProductPage() {
            if (this.myPrefix === 'brand') {
                this.$router.push({ name: 'BrandProductDetail', params: { product: this.product.slug } });
            } else if (this.myPrefix === 'factory') {
                this.dispatch = false;
                this.demand = true;
                this.ready = true;
                this.$router.push({ name: 'FactoryLedgers' });
            } else if (this.myPrefix === 'vendor') {
                this.dispatch = true;
                this.demand = false;
                this.ready = false;
                this.$router.push({ name: 'VendorLedgers' });
            }
        },
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
                dispatch: this.dispatch, // new
                adjustment: this.adjustment,
            });
        },
        resetFilters() {
            this.ready = true;
            this.order = true;
            this.demand = true;
            this.dispatch = true; // new
            this.adjustment = true;
            this.startDate = '';
            this.endDate = '';
            this.setFilterDate();
            this.emitFilters();
            document.getElementById('ledgerFilter').classList.remove('show');
        }
    },
}
</script>
