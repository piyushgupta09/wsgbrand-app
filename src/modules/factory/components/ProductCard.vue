<template>
    <div class="col">
        <router-link :to="{ name: 'FactoryLedgerDetail', params: { ledger: catalog.sid } }"
            class="text-dark text-decoration-none">
            <div :id="'productImages' + index" class="carousel slide">
                <div class="carousel-inner position-relative">
                    <div :id="'cardCarousel' + imgIndex" class="carousel-item" :class="{ active: imgIndex === 0 }"
                        v-for="(image, imgIndex) in catalog.product.options" :key="imgIndex">
                        <img :src="image.preview" class="w-100" style="object-fit: cover;">
                    </div>
                    <div v-if="catalog.balance_qty" style="height:1rem; width: 1rem;"
                        class="position-absolute end-0 rounded-circle m-2" :class="{
                            'bg-danger': catalog.last_activity === 'Order' && catalog.balance_qty,
                            'bg-success': catalog.last_activity === 'Ready' && catalog.balance_qty,
                            'bg-primary': catalog.last_activity === 'Demand' && catalog.balance_qty
                        }">
                    </div>
                </div>
                <!-- Carousel Indicators/Controls -->
                <div class="d-flex flex-nowrap mt-1" id="scroll" style="overflow-x: scroll; overflow-y: hidden;">
                    <button v-for="(option, optionIndex) in catalog.product.options" :key="optionIndex"
                        type="button" class="rounded p-0 border me-1"
                        :data-bs-target="'#productImages' + productIndex" 
                        :data-bs-slide-to="optionIndex"
                        :class="{ active: optionIndex === 0 }" 
                        :aria-current="optionIndex === 0 ? 'true' : 'false'">
                    <img :src="option.image" class="wh-40 of-cover" style="scale: 1.6;">
                </button>
            </div>
            </div>
            <div class="card-footer p-1 border-start border-top">
                <div class="row">
                    <div class="col-6 fw-bold">#{{ catalog.product_code }}</div>
                    <div class="col-6 text-end fw-bold">B:{{ catalog.balance_qty }}</div>
                    <div class="col-6">R:{{ catalog.readyable_qty }}</div>
                    <div class="col-6 text-end">D:{{ catalog.dispatchable_qty }}</div>
                </div>
            </div>

        </router-link>
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        catalog: Object,
        index: Number,
    },
}
</script>

<style></style>