<template>
    <div class="col">
        <router-link :to="{ name: 'VendorLedgerDetail', params: { ledger: catalog.sid } }"
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
                <div class="d-flex my-1 px-1 border-start" id="scroll" style="overflow-x: auto;">
                    <button type="button" class="p-0 border me-1 overflow-hidden" style="width: 50px; height: 50px;"
                        :data-bs-target="'#productImages' + index" :data-bs-slide-to="imgIndex"
                        :class="{ active: imgIndex === 0 }" :aria-current="imgIndex === 0 ? true : false"
                        v-for="(image, imgIndex) in catalog.product.options" :key="imgIndex">
                        <img :src="image.image" class="w-100 h-100" style="object-fit: cover; scale: 2; ">
                    </button>
                </div>
            </div>
            <div class="card-footer p-1 border-start border-top">
                <div class="row">
                    <div class="col-6 fw-bold">#{{ catalog.product_code }}</div>
                    <div class="col-6 text-end fw-bold">{{ catalog.balance_qty }}</div>
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