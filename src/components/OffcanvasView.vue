<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" :id="model_id" :aria-labelledby="model_id + 'Label'">
        <div v-if="header" class="offcanvas-header w-100 d-flex justify-content-between align-items-center bg-light border-bottom"
            style="padding-top: .7rem; padding-bottom: .7rem">
            <div class="text-capitalize fw-bold ls-1">{{ title }}</div>
            <button type="button" class="btn" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
        <div class="offcanvas-body p-0">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OffcanvasView',
    props: {
        title: {
            type: String,
            default: 'Offcanvas Title',
        },
        model_id: {
            type: String,
            default: 'offcanvas',
        },
        header: {
            type: Boolean,
            default: true,
        },
    },
}
</script>
