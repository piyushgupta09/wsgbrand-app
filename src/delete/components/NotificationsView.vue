<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
        <div class="d-flex flex-column">
            <div class="d-flex align-items-center pb-2">
                <div class="">
                    <b class="mb-0 ss " style="font-size: 18px;">Lorem ipsum dolor sit.</b>
                    <div class="d-flex justify-content-between">
                        <div class="d-flex gap-2" style="font-size: 12px;">
                            <small class="">12:45 ,</small>
                            <small class="">24-12-2024</small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="">
                <p class="ss mb-0">Lorem, ipsum dolor sit amet consectetur
                    adipisicingelit. Fuga, temporibus.</p>
            </div>
            <div class="d-flex align-items-center gap-2" style="font-size: 12px;">
                <div class="d-flex align-items-center">
                    <div class="text-decoration-none text-secondary p-1">
                        Clik me
                    </div>
                    <i class="bi bi-arrow-return-left text-secondary" style="font-size: 12px;"></i>
                </div>
            </div>

        </div>
    </li>
  </ul>
</template>

<script>
export default {
    name: 'NotificationsView',
    mounted() {
        this.$store.dispatch('noti/fetchUnreadNotifications');
    },
    computed: {
        unreadNotifications() {
            return this.$store.getters['authy/unreadNotifications'];
        }
    },
}
</script>
