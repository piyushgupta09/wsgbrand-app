<template>
    <button 
        type="button"
        class="d-flex justify-content-center align-items-center btn" 
        :class="styles" 
        :disabled="isLoading"
        @click="emitClickEvent"
    >
        <span v-if="isLoading" class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'LoadingButton',
    props: {
        styles: {
            type: String,
            default: 'button'
        }
    },
    computed: {
        isLoading() {
            return this.$store.getters.loading
        }
    },
    methods: {
        emitClickEvent() {
            this.$emit('btn-clicked');
        }
    }
}
</script>
