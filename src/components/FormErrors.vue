<template>
  <div v-if="errors">
    <div class="text-danger small mb-3 pulse">
      <p v-for="(error, index) in errors" :key="index" class="mb-1">
          <i class="bi bi-exclamation-triangle text-inherit mx-2"></i>
          <span v-for="(err, index) in error" :key="index" class="me-2">{{ err }}.</span>
      </p>
    </div>
</div>
</template>

<script>
export default {
  name: 'FormErrors',
  computed: {
    errors () {
      const errors = this.$store.getters.errors
      if (errors && Object.keys(errors).length > 0) {
        return errors
      } else {
        return false
      }
    }
  }
}
</script>
