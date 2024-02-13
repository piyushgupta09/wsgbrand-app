<template>
  <div class="position-relative">

    <app-topbar v-if="isMyDashboardRoute" />

    <div 
      style="height: 100vh; overflow-y: scroll;"
      :style="{ 
        'padding-top': isMyDashboardRoute ? '60px' : '0',
        'padding-bottom': showBottomNav ? '60px' : '0'
      }"
    >
      <router-view />
    </div>

    <app-footbar v-if="showBottomNav" />

  </div>
</template>

<script>
import PusherMixin from "@/mixins/pusher-connect.js"
import AppTopbar from "@/components/topbars/AppTopbar.vue"
import AppFootbar from "@/components/AppFootbar.vue"

export default {
  name: 'AppLayout',
  mixins: [PusherMixin],
  components: { AppTopbar, AppFootbar },
  computed: {
    isMyDashboardRoute() {
      return this.$route.path.includes('dashboard');
    },
    showBottomNav() {
      return !this.$route.path.includes('chats');
    }
  },
}
</script>
