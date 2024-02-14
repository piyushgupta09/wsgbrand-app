<template>
  <div class="position-relative bg-banner pb-5">

    <div class="d-flex flex-column justify-content-evenly align-items-center h-100">

      <div class="text-white text-center font-title">
        <div class="d-flex flex-column">
          <div class="d-flex justify-content-center mb-3 fs-2 font-title border-bottom pb-1 border-warning pe-4" style="width: fit-content">
            <span class="me-2 font-title">Hello,</span>
            <span class="fw-bold font-title">{{ user.name }}</span>
          </div>
          <span class="fs-1 fw-bold font-title my-2">Welcome to {{ brandInfo.name }}</span>
          <span class="lh-1 fs-5">{{ brandInfo.tagline }}</span>
        </div>
      </div>

      <div class="text-center bg-white w-100 p-2 fw-bold font-ubuntu">
        Where quality and trust matters the most
      </div>

      <img :src="brandInfo.brand" class="w-100 mb-5" style="filter: brightness(0) invert()">

    </div>

    <div class="position-absolute start-0 end-0 bottom-0 mb-5">

      <div v-if="alert" class="d-flex flex-column text-bg-dark p-3 zi-1k">
          <p class="mb-2 font-title">No role is assigned to your account. Please ask your brand manager to assign you role.</p>
          <div class="d-flex justify-content-between">
            <button class="btn btn-sm btn-outline-light px-3" @click="alert = false">OK</button>
            <button class="btn btn-sm btn-danger px-2" @click="reloadUserData">Try Again</button>
          </div>
      </div>

      <div v-else class="d-flex flex-column align-items-center w-100 bg-dark font-title py-3 zi-1k">
        
        <div v-if="auth" class="d-flex justify-content-evenly w-100">
          <button type="button" class="btn rounded-0 border-danger text-white border-2" @click.stop="logoutSession">
            <span class="font-title">Logout Session</span>
          </button>
          <button type="button" class="btn rrounded-0 brand-btn-p border-2" @click.stop="myDashboard">
            <div class="d-flex align-items-center">
              <span class="fw-bold pe-2">Dashboard</span>
              <i class="bi bi-chevron-right ts-icon"></i>
            </div>
          </button>
        </div>

        <div v-else class="d-flex justify-content-evenly w-100">
          <router-link :to="{ name: 'Register' }" class="btn rounded-0 border-danger border-2">
            <div class="d-flex align-items-center text-danger">
              <i class="bi bi-chevron-left ts-icon"></i>
              <span class="fw-bold ps-2">Create Account</span>
            </div>
          </router-link>
          <router-link :to="{ name: 'Login' }" class="btn rounded-0 brand-btn-p border-2">
            <div class="d-flex align-items-center">
              <span class="fw-bold pe-2">Login Account</span>
              <i class="bi bi-chevron-right ts-icon"></i>
            </div>
          </router-link>  
        </div>
        
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'BrandBanner',
  data () {
    return {
      alert: false,
    }
  },
  computed: {
    auth () {
      return this.$store.getters["authy/isAuthenticated"];
    },
    user() {
      return this.$store.getters["authy/user"];
    },
    brandInfo () {
      return this.$store.getters["repo/info"];
    },
  },
  methods: {
    logoutSession() {
      this.$store.dispatch("authy/sendLogoutRequest");
    },
    reloadUserData() {
      this.$store.dispatch("authy/fetchUserProfile");
    },
    myDashboard() {
      switch (this.$store.getters["authy/getRole"]) {
        case "owner-brand":
        case "manager-brand": 
        case "order-manager-brand":
        case "store-manager-brand":
        case "account-manager-brand":
          this.$router.push({ name: "BrandDashboard" });
          break;
        case "owner-vendor":
        case "manager-vendor":
          this.$router.push({ name: "VendorDashboard" });
          break;
        case "owner-factory":
        case "manager-factory":
          this.$router.push({ name: "FactoryDashboard" });
          break;
        default:
          this.alert = true;
          break;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.bg-banner {
  background-color: #78322D;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FA4951'/%3E%3Cstop offset='1' stop-color='%2378322D'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FFCF56' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFCF56' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
}
</style>
