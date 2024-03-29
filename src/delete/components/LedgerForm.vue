<template>
    <div class="font-title">

        <!-- <div class="btn-group w-100 mb-3">
            <div class="btn btn-sm fw-500 text-capitalize" @click="formData.adjustment = false"
                :class="{ 'btn-outline-dark': formData.adjustment, 'btn-dark': !formData.adjustment }">
                {{ formData.title }}
            </div>
            <div class="btn btn-sm fw-500 text-capitalize" @click="formData.adjustment = true"
                :class="{ 'btn-outline-dark': !formData.adjustment, 'btn-danger': formData.adjustment }">
                {{ formData.title }} Adjustment
            </div>
        </div> -->

        <p class="fw-bold text-capitalize text-center">Place {{ formData.title }}</p>

        <input type="date" class="form-control mb-2" v-model="formData.date">
        <textarea class="form-control mb-2" v-model="formData.content" placeholder="Enter message here ..."></textarea>

        <div v-if="product.options && product.options.length" class="d-flex flex-wrap gap-2 mb-2">
            <div class="d-flex w-100" v-for="(option, optionIndex) in product.options" :key="optionIndex">
                <button class="btn p-0 w-50p overflow-hidden" data-bs-toggle="modal" data-bs-target="#ledgerFormImageModal">
                    <img :src="option.image" class="rounded of-cover w-100" 
                        data-bs-toggle="modal" data-bs-target="#ledgerImageModal" :data-bs-url="option.preview">
                </button>
                <div class="flex-fill overflow-hidden px-2 py-1">
                    <div class="d-flex justify-content-between">
                        <label class="text-capitalize small text-muted fw-bold mb-1">{{ option.name }} Color</label>
                        <label class="text-capitalize small text-muted fw-bold mb-1">Sizes</label>
                    </div>
                    <div class="row m-0 g-2">
                        <div class="col-4 p-0">
                            <input type="number" class="form-control form-control-sm" :id="'optionQuantity_' + option.sid"
                                v-model="formData.quantity[optionIndex]" min="1" />
                        </div>
                        <div class="col-8 p-0" v-if="product.ranges && product.ranges.length">
                            <div v-if="sizesAllowed" class="d-flex gap-2 justify-content-end flex-wrap">
                                <div v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex">
                                    <input type="checkbox" class="btn-check" 
                                        :id="'btn-check-outlined_' + option.sid + '_' + range.sid" 
                                        autocomplete="off"
                                        v-model="formData.ranges[`${option.sid}_${range.sid}`]" 
                                        :value="range.sid">
                                    <label class="btn btn-outline-success border py-0 text-capitalize" 
                                        :for="'btn-check-outlined_' + option.sid + '_' + range.sid">
                                        {{ range.abbr }}
                                    </label>
                                </div>
                            </div>
                            <div v-else class="d-flex gap-2 justify-content-end flex-wrap">
                                <div v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex">
                                    <div class="btn btn-success border py-0 text-capitalize" disabled>
                                        {{ range.abbr }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between p-2 border w-100 fw-bold small my-2">
                <div class="d-flex">
                    <div class="text-capitalize pe-2">Total {{ type }} Quantity</div>
                    <span>[{{ actualTotalQuantity.toLocaleString() }}]</span>
                </div>
                <span>{{ adjustedTotalQuantity.toLocaleString() }} pcs</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'LedgerForm',
    props: ['type', 'product'],
    emits: ['formData'],    
    data() {
        return {
            sizesAllowed: false,
            formData: {
                type: null,
                title: 'new ',
                quantity: {},
                ranges: {},
                content: '',
                date: null,
            },
        }
    },
    computed: {
        actualTotalQuantity() {
            let actualTotal = 0;
            this.product.options.forEach((option, optionIndex) => {
                actualTotal += parseInt(this.formData.quantity[optionIndex] || 0);
            });
            return actualTotal;
        },
        adjustedTotalQuantity() {
            let total = 0;
            this.product.options.forEach((option, optionIndex) => {
                const selectedRanges = this.product.ranges
                    .filter(range => this.formData.ranges[`${option.sid}_${range.sid}`]);

                const quantityPerRange = selectedRanges.length > 0 
                    ? Math.max(Math.ceil(this.formData.quantity[optionIndex] / selectedRanges.length), 1)
                    : 0;

                total += quantityPerRange * selectedRanges.length;
            });
            return total > 0 ? total : this.actualTotalQuantity;
        },
    },
    mounted() {
        this.initializeFormData();
        this.emitData();
    },
    watch: {
        'formData': {
            handler() {
                this.emitData();
            },
            immediate: true,
            deep: true,
        },
        product: {
            handler(newValue, oldValue) {
                if (newValue !== oldValue) {
                    this.initializeRanges();
                }
            },
            deep: true,
            immediate: true,
        }
    },
    methods: {
        emitData() {
            this.$emit('formData', {
                data: this.formData,
                total: this.adjustedTotalQuantity
            })
        },
        initializeFormData() {
            this.formData.type = this.type;
            this.formData.title += this.type;
            this.setNextWeekDate();
            this.initializeRanges();
        },
        setNextWeekDate() {
            // Current date
            const currentDate = new Date();
            // Add 7 days
            currentDate.setDate(currentDate.getDate() + 7);
            // Format to ISO string (YYYY-MM-DD)
            const nextWeekDate = currentDate.toISOString().substring(0, 10);
            this.formData.date = nextWeekDate;
        },
        initializeRanges() {
            if (this.product && Array.isArray(this.product.options) && Array.isArray(this.product.ranges)) {
                this.product.options.forEach((option) => {
                    this.product.ranges.forEach((range) => {
                        const key = `${option.sid}_${range.sid}`;
                        this.formData.ranges[key] = true;
                    });
                });
            }
        },
    }

}
</script>
