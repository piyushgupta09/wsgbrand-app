<template>
  <div class="position-relative">
    <router-view />
    <AppToast />
    <ImagePreviewModal />
  </div>
</template>

<script>
import AppToast from '@/components/AppToast.vue'
import ImagePreviewModal from '@/components/ImagePreviewModal.vue'

export default {
  name: 'App',
  components: {
    AppToast,
    ImagePreviewModal,
  },
  created() {
    this.$store.dispatch('authy/loadAuthData');
  },
}
</script>
