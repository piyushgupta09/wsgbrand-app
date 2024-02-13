<template>
    <div class="position-relative p-0 col">

        <div v-if="activeDesign == 1" class="border-bottom"
            :class="{ 'border-end': productIndex % 2 === 0 }">

            <div v-if="product.options && product.options.length" :id="'productImages' + productIndex"
                class="carousel slide">
                <div class="carousel-inner" style="height: 250px; max-height:250px; overflow-y: hidden;">
                    <!-- Carousel Items -->
                    <div v-for="(option, optionIndex) in product.options" :key="optionIndex"
                        :id="'cardCarousel' + optionIndex" class="carousel-item position-relative"
                        :class="{ active: optionIndex === 0 }">
                        <router-link :to="{ name: 'BrandProductDetail', params: { product: product.slug } }">
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

            <router-link v-else :to="{ name: 'BrandProductDetail', params: { product: product.slug } }" class="td-none">
                <img :src="product.image" class="of-cover w-100"
                    style="height: 250px; max-height:250px; overflow-y: hidden;">
                <div class="d-flex flex-column justify-content-center fw-bold h-45p text-dark w-100 align-items-center">
                    No Color Options
                </div>
            </router-link>

            <router-link :to="{ name: 'BrandProductDetail', params: { product: product.slug } }" class="td-none text-dark">
                <div class="d-flex justify-content-between p-1 fw-bold">
                    <div class="small">#{{ product.code }} </div>
                    <div class="small">
                        <span v-if="product.stock">{{ product.stock.quantity }} pcs</span>
                        <span v-else class="text-danger">empty</span>
                    </div>
                </div>
            </router-link>

            <div class="position-absolute top-0 end-0 m-1">
                <div class="d-flex flex-column">
                    <!-- <span v-if="!product.active" class="px-1 opacity-75 small fw-bold" :class="{
                        'text-bg-success': product.active === true,
                        'text-bg-danger': product.active === false
                    }">Live
                    </span> -->
                    <i v-if="product.last_activity" class="bi bi-circle-fill px-1" :class="{
                        'text-danger': product.last_activity === 'Order',
                        'text-success': product.last_activity === 'Ready',
                        'text-primary': product.last_activity === 'Demand',
                        'text-warning': product.last_activity === 'Dispatch'
                    }">
                    </i>
                </div>
            </div>

        </div>

        <div v-if="activeDesign == 2" class="border-bottom">
            <router-link :to="{ name: 'BrandProductDetail', params: { product: product.slug } }">
                <img :src="product.image" class="w-100 of-cover">
                <div class="position-absolute bottom-0 start-0 end-0 m-1 opacity-75"
                    v-if="product.options && product.options.length && product.ranges && product.ranges.length">
                    <div class="d-flex justify-content-between">
                        <div v-if="product.options && product.options.length"
                            class="btn btn-dark rounded-circle shadow wh-20 lh-1 p-0">
                            <span class="fw-bolder small text-uppercase">{{ product.options.length }}</span>
                        </div>
                        <div v-if="product.ranges && product.ranges.length"
                            class="btn btn-dark rounded-0 shadow wh-20 lh-1 p-0">
                            <span class="fw-bolder small text-uppercase">{{ product.ranges.length }}</span>
                        </div>
                    </div>
                </div>
                <div class="position-absolute top-0 end-0 m-1">
                    <div class="d-flex flex-column">
                        <i v-if="product.last_activity" class="bi bi-circle-fill px-1" :class="{
                            'text-danger': product.last_activity === 'Order',
                            'text-success': product.last_activity === 'Ready',
                            'text-primary': product.last_activity === 'Demand',
                            'text-warning': product.last_activity === 'Dispatch'
                        }">
                        </i>
                    </div>
                </div>
            </router-link>
        </div>

        <div v-if="activeDesign == 3" class="">
            <router-link :to="{ name: 'BrandProductDetail', params: { product: product.slug } }" class="td-none text-dark">
                <div class="d-flex border-bottom align-items-center">
                    <img :src="product.image" class="of-cover h-100p">
                    <div class="flex-fill d-flex flex-column justify-content-center p-2">

                        <!-- Stock -->
                        <div class="small fw-bold">
                            <span v-if="product.stock">{{ product.stock.quantity }} pcs</span>
                            <span v-else class="text-danger">empty</span>
                        </div>

                        <!-- Code | Name -->
                        <div class="flex-fill pb-1">
                            <span class="fw-500 max-line-1">#{{ product.code }} | {{ product.name }}</span>
                        </div>

                        <!-- Options | Ranges -->
                        
                        <div v-if="product.options && product.options.length && product.ranges && product.ranges.length">
                            <div v-if="optionAndRangeCountMoreThan8" class="d-flex flex-column justify-content-between">
                                <div v-if="product.options && product.options.length" class="d-flex">
                                    <button v-for="(option, optionIndex) in product.options" :key="optionIndex" type="button"
                                        class="p-0 border me-1 overflow-hidden">
                                        <img :src="option.image" class="wh-30 of-cover" style="scale: 2;">
                                    </button>
                                </div>
                                <div v-if="product.ranges && product.ranges.length" class="d-flex mt-1">
                                    <button v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex" type="button"
                                        class="border me-1 overflow-hidden py-0">
                                        <span class="wh-20 smaller fw-bold lh-1 text-uppercase">{{ range.abbr }}</span>
                                    </button>
                                </div>
                            </div>
                            <div v-else class="d-flex justify-content-between">
                                <div v-if="product.options && product.options.length" class="d-flex">
                                    <button v-for="(option, optionIndex) in product.options" :key="optionIndex" type="button"
                                        class="p-0 border me-1 overflow-hidden">
                                        <img :src="option.image" class="wh-30 of-cover" style="scale: 2;">
                                    </button>
                                </div>
                                <div v-if="product.ranges && product.ranges.length" class="d-flex">
                                    <button v-for="(range, rangeIndex) in product.ranges" :key="rangeIndex" type="button"
                                        class="border ms-1 overflow-hidden py-0">
                                        <span class="wh-30 smaller fw-bold lh-1 text-uppercase">{{ range.abbr }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <span v-else class="small">No Options Available</span>

                    </div>
                </div>
                <div class="position-absolute top-0 end-0 m-1">
                    <div class="d-flex flex-column">
                        <i v-if="product.last_activity" class="bi bi-circle-fill px-1" :class="{
                            'text-danger': product.last_activity === 'Order',
                            'text-success': product.last_activity === 'Ready',
                            'text-primary': product.last_activity === 'Demand',
                            'text-warning': product.last_activity === 'Dispatch'
                        }">
                        </i>
                    </div>
                </div>
            </router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        productIndex: {
            type: Number,
            default: 0,
        },
        product: {
            type: Object,
            required: true,
        },
        activeDesign: {
            type: Number,
            required: true,
        },
    },
    computed: {
        optionAndRangeCountMoreThan8() {
            return this.product.options.length + this.product.ranges.length > 8;
        },
    },
}
</script>
