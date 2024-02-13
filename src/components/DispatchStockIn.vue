<template>
    <div v-if="activeDispatch" class="offcanvas offcanvas-bottom h-75" tabindex="-1" id="dispatchStockInModal"
        aria-labelledby="dispatchStockInModalLabel" style="max-width: 100vw;">

        <div class="offcanvas-header border-bottom">
            <div class="offcanvas-title fw-bold ls-1 font-title">Book Purchase</div>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body pt-3" style="overflow-x: hidden;">

            <form @submit.prevent="postPurchase" method="post" class="w-100 h-100" style="overflow-x: hidden;">

                <div class="mb-3">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-column me-1">
                            <label for="invoiceId" class="form-label">Invoice No:</label>
                            <input type="text" id="invoiceId" class="form-control" v-model="invoiceId" />
                        </div>
                        <div class="d-flex flex-column ms-1">
                            <label for="invoiceDate" class="form-label">Invoice Date:</label>
                            <input type="date" id="invoiceDate" class="form-control" v-model="invoiceDate" />
                        </div>
                    </div>

                    <small v-if="error" class="mt-2 text-danger">{{ error }}</small>
                </div>

                <div class="d-flex justify-content-between mb-3" v-for="(item, itemIndex) in activeDispatch.items"
                    :key="itemIndex">

                    <img :src="item.image" class="of-cover w-100p" data-bs-toggle="modal" data-bs-target="#imagePreviewModal"
                        :data-bs-url="item.preview">

                    <div class="flex-fill d-flex justify-content-between ps-2">

                        <div class="flex-fill d-flex flex-column justify-content-between">

                            <!-- Option Name and quantity -->
                            <div class="flex-fill d-flex justify-content-between">
                                <span class="text-capitalize fw-500">{{ item.option }}</span>
                                <span class="fw-bold">{{ item.quantity }} pcs.</span>
                            </div>

                            <!-- Ranges and quantity -->
                            <div class="d-flex justify-content-between align-items-center small mb-1"
                                v-for="(itemRange, itemRangeIndex) in item.ranges" :key="itemRangeIndex">
                                <div class="fw-500 flex-fill border-bottom py-1">{{ itemRange.range }}</div>
                                <div class="d-flex">
                                    <button class="btn btn-sm btn-outline-dark border rounded-0" type="button"
                                        @click="decrement(item, `${item.option_sid}_${itemRange.range_sid}`)">
                                        <i class="bi bi-dash-lg"></i>
                                    </button>
                                    <input type="number" style="width: 60px;"
                                        class="form-control form-control-sm text-end rounded-0"
                                        v-model="formData[`${item.option_sid}_${itemRange.range_sid}`]"
                                        :max="Math.round(itemRange.max_quantity)" :min="Math.round(itemRange.min_quantity)">
                                    <button class="btn btn-sm btn-outline-dark border rounded-0" type="button"
                                        @click="increment(item, `${item.option_sid}_${itemRange.range_sid}`)">
                                        <i class="bi bi-plus-lg"></i>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <textarea class="form-control rounded-0 mb-3" v-model="content"
                    placeholder="Enter message here ..."></textarea>

                <div class="btn-group d-flex">
                    <button type="button" class="btn btn-danger rounded-0" data-bs-dismiss="offcanvas">Cancel</button>
                    <button type="submit" class="btn btn-success rounded-0">Accept</button>
                </div>

            </form>

        </div>

    </div>
</template>

<script>
export default {
    name: 'DispatchStockIn',
    props: ['dispatches'],
    data() {
        return {
            activeDispatch: {},
            invoiceDate: new Date().toISOString().slice(0, 10),
            invoiceId: '121212',
            content: '',
            error: null,
            formData: {},
            stockInDisable: false,
        };
    },
    async mounted() {
        this.loadActiveDispatch();
    },
    watch: {
        activeDispatch: {
            immediate: true,
            handler(newValue, oldValue) {
                // console.log('activeDispatch watcher', newValue, oldValue);
                // Check if oldValue is defined and if the sid has changed
                if (oldValue && newValue.sid !== oldValue.sid) {
                    this.initializeFormData(newValue);
                } else if (!oldValue) {
                    // This is the case when the watcher runs immediately after component creation
                    this.initializeFormData(newValue);
                }
            }
        }
    },
    methods: {
        initializeFormData(newValue) {
            if (newValue.sid === undefined) {
                return;
            }
            Object.values(this.activeDispatch.items).forEach(item => {
                // console.log('item', item);
                Object.values(item.ranges).forEach(range => {
                    const key = `${item.option_sid}_${range.range_sid}`;
                    this.formData[key] = range.quantity;
                });
            });
        },
        loadActiveDispatch() {
            const dispatchStockInModal = document.getElementById('dispatchStockInModal')
            if (dispatchStockInModal) {
                dispatchStockInModal.addEventListener('show.bs.offcanvas', event => {
                    const button = event.relatedTarget
                    const dispatchSid = button.getAttribute('data-bs-dispatch-sid');
                    this.activeDispatch = this.dispatches.find(dispatch => dispatch.sid == dispatchSid);
                });
            }
        },
        increment(item, key) {
            if (this.formData[key] < Math.round(item.max_quantity)) {
                this.formData[key]++;
            } else {
                this.error = 'Maximum quantity reached.';
                this.formData[key] = Math.round(item.max_quantity);
            }
        },
        decrement(item, key) {
            if (this.formData[key] > Math.round(item.min_quantity)) {
                this.formData[key]--;
            } else {
                this.error = 'Minimum quantity reached.';
                this.formData[key] = Math.round(item.min_quantity);
            }
        },
        postPurchase() {

            if (this.stockInDisable) {
                return;
            }

            if (!this.invoiceDate) {
                this.error = 'Invoice date is required.';
                return;
            }

            if (!this.invoiceId) {
                this.error = 'Invoice ID is required.';
                return;
            }
            
            const data = {
                content: this.content,
                quantities: JSON.stringify(this.formData),
                ledger_sid: this.activeDispatch.ledger_sid,
                doc_id: this.invoiceId,
                doc_date: this.invoiceDate,
                dispatch_sid: this.activeDispatch.sid,
            };

            this.stockInDisable = true;
            this.$store.dispatch('brandy/postStockIn', data)
        },
    }
}
</script>
