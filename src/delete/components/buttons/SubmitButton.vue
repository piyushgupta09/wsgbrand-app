<template>
    <button 
        type="submit"
        class="btn" 
        :class="styles" 
        :disabled="isLoading"
    >
        <span v-if="isLoading" class="spinner-border spinner-border-sm mx-2" role="status" aria-hidden="true"></span>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'SubmitButton',
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
}
</script>
