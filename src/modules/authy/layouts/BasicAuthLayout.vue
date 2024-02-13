<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div style="min-width: 100vw; width: 360px">
      <div class="row m-0 g-4">
        <div class="col-md-5">
          <div class="d-flex flex-column justify-content-between h-100">
            <div class="d-flex flex-column justify-content-center align-items-center">
              <img :src="brandInfo.logo" :alt="brandInfo.name" style="height: 110px; filter: saturate(450%)">
              <div class="text-bg-dark mt-2">
                <p class="font-title px-2 fs-4 fw-bold px-1 mb-0">{{ brandInfo.name }}</p>
              </div>
              <small class="text-center font-title mt-2">{{ brandInfo.tagline }}</small>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <router-view />
        </div>
        <div class="col-md-1 col-lg-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthModule',
  computed: {
    brandInfo() {
      return this.$store.getters['repo/info'];
    },
  },
}
</script>


<style lang="scss">
.brand-checkbox .form-check-input:checked {
    background-color: #ea3941;
    border-color: #ea3941;
}
</style>