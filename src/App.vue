<template>
  <div 
    class="position-relative pb-3" 
    :style="{ height: `calc(var(--vh, 1vh) * 100)`, width: `calc(var(--vw, 1vw) * 100)` }">
    <router-view />
    <AppToast />
    <ImagePreviewModal />
    <audio id="notification-bell" :src="audioSource" style="height: 0px">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
import AppToast from '@/components/AppToast.vue';
import ImagePreviewModal from '@/components/ImagePreviewModal.vue';

export default {
  name: 'App',
  components: {
    AppToast,
    ImagePreviewModal,
  },
  created() {
    this.$store.dispatch('authy/loadAuthData');
    this.adjustViewport();
    window.addEventListener('resize', this.adjustViewport);
  },
  unmounted() {
    window.removeEventListener('resize', this.adjustViewport);
  },
  methods: {
    adjustViewport() {
      const vh = window.innerHeight * 0.01;
      const vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      document.documentElement.style.setProperty('--vw', `${vw}px`);
    },
  },
  computed: {
    audioSource() {
      return require('@/assets/notification.mp3');
    },
  },
};
</script>
