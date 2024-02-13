<template>
  <div class="position-relative">

    <!-- Fixed Navbar -->
    <nav class="navbar" style="position: absolute; top: 0; width: 100%; height: 140px;">
      <div class="container d-flex">
        <router-link class="navbar-brand d-flex align-items-center" :to="{ name: 'Home' }">
          <img :src="brandInfo.brand" :alt="brandInfo.name" class="w-100 ps-2 pe-3" height="50">
        </router-link>
        <div class="flex-fill d-flex flex-column">
          <span class="fw-bold font-title">{{ brandInfo.name }}</span>
          <span class="ls-1 small font-title">{{ brandInfo.tagline }}</span>
        </div>
        <div class="d-flex flex-column">
          <router-link class="navbar-brand d-flex align-items-center" :to="{ name: 'Home' }">
            <i class="bi bi-x-lg"></i>
          </router-link>
        </div>
      </div>
      <div class="d-flex justify-content-between w-100">
        <router-link
            v-for="(link, index) in links"
            :key="index"
            class="btn border-0 smaller flex-fill fw-bold ls-1 rounded-0" 
            :class="activePageRoute === link.route ? 'btn-dark' : ''" 
            :to="{ name: link.route }">
            {{ link.name }}
        </router-link>
        <button 
            class="btn btn-danger smaller flex-fill fw-bold ls-1 rounded-0" 
            @click.stop="logoutSession">
            Logout
        </button>
      </div>
    </nav>

    <!-- Content with top padding -->
    <div style="height: calc(100vh - 140px); padding-top: 125px;">
      <router-view />
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserPageLayout',
  data() {
    return {
      links: [
        { route: 'ProfilePage', name: 'Profile' },
        { route: 'AddressesPage', name: 'Addresses' },
        { route: 'AccountPage', name: 'Account' },
      ],
    }
  },
  created() {
    this.$store.dispatch('authy/fetchUserProfile');
  },
  computed: {
    brandInfo() {
      return this.$store.getters['repo/info'];
    },
    activePageRoute() {
      return this.$route.name;
    },
  },
  methods: {
    logoutSession() {
      this.$store.dispatch('authy/sendLogoutRequest');
    },
  },
}
</script>
