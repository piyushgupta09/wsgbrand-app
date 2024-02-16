<template>
    <div class="col position-relative">

        <div v-if="product.options && product.options.length" :id="'productImages' + productIndex" class="carousel slide">
            
            <div class="carousel-inner" style="height: 250px; max-height:250px; overflow-y: hidden;">
                <!-- Carousel Items -->
                <div v-for="(option, optionIndex) in product.options" :key="optionIndex"
                    :id="'cardCarousel' + optionIndex" class="carousel-item position-relative"
                    :class="{ active: optionIndex === 0 }">
                    <router-link :to="{ name: 'VendorLedgerDetail', params: { ledger: ledger.sid } }">
                        <img :src="option.preview" class="of-cover w-100">
                        <div v-if="product.ranges && product.ranges.length" class="position-absolute top-0 start-0 m-2">
                            <div class="d-flex flex-column opacity-50">
                                <button v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex" type="button"
                                    class="btn btn-dark shadow wh-25 mb-1 p-0">
                                    <span class="fw-bolder text-uppercase">{{ range.abbr }}</span>
                                </button>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

            <!-- Carousel Indicators/Controls -->
            <div class="d-flex flex-nowrap mt-1" id="scroll" style="overflow-x: scroll; overflow-y: hidden;">
                <button v-for="(option, optionIndex) in product.options" :key="optionIndex" type="button"
                    class="rounded p-0 border me-1" :data-bs-target="'#productImages' + productIndex"
                    :data-bs-slide-to="optionIndex" :class="{ active: optionIndex === 0 }"
                    :aria-current="optionIndex === 0 ? 'true' : 'false'">
                    <img :src="option.image" class="wh-40 of-cover" style="scale: 1.6;">
                </button>
            </div>
        </div>

        <router-link v-else :to="{ name: 'VendorLedgerDetail', params: { ledger: ledger.sid } }" class="td-none">
            <img :src="product.image" class="of-cover w-100"
                style="height: 250px; max-height:250px; overflow-y: hidden;">
            <div class="d-flex flex-column justify-content-center fw-bold h-45p text-dark w-100 align-items-center">
                No Color Options
            </div>
        </router-link>
        
        <router-link :to="{ name: 'VendorLedgerDetail', params: { ledger: ledger.sid } }" class="td-none text-dark">
            <div class="card-footer p-1 border-start border-top">
                <div class="row">
                    <div class="col-6 fw-bold">#{{ ledger.product_code }}</div>
                    <div class="col-6 text-end fw-bold">B:{{ ledger.balance_qty }}</div>
                    <div class="col-6 small">R:{{ ledger.readyable_qty }}</div>
                    <div class="col-6 small text-end">D:{{ ledger.dispatchable_qty }}</div>
                </div>
            </div>
        </router-link>

        <div class="position-absolute top-0 end-0 m-1">
            <div class="d-flex flex-column">
                <i v-if="product.last_activity" class="bi bi-circle-fill px-1" :class="{
                    'text-danger': product.last_activity === 'Order',
                    'text-warning': product.last_activity === 'Dispatch'
                }">
                </i>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        ledger: Object,
        product: Object,
        index: Number,
        productIndex: Number
    },
}
</script>

<style></style>