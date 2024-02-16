<template>
    <nav class="navbar fixed-top bg-body-tertiary border-bottom">
        <div class="container">
            <div class="d-flex justify-content-between w-100">

                <!-- Brand -->
                <div class="d-flex flex-fill align-items-center">
                    <div class="pe-2 me-1">
                        <img :src="brand.logo" :alt="brand.name" width="30" style="scale: 1.5">
                    </div>
                    <div class="d-flex flex-fill flex-column justify-content-center">
                        <span class="font-title fs-5 lh-1 fw-bold">{{ brand.name }}</span>
                        <span class="fw-500 ls-1 smaller font-subtitle">{{ brand.tagline }}</span>
                    </div>
                </div>

                <!-- Notification Bell & Profile Icon -->
                <div class="d-flex align-items-center justify-content-end">
                    <button v-if="pusherConfig" class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNotifications"
                        aria-controls="offcanvasNotifications">                        
                        <div v-if="hasNotifications" class="d-flex justify-content-around align-items-center">
                            <i class="bi bi-bell-fill text-danger fs-5 lh-1"></i>
                            <span class="ms-2 badge text-bg-danger badge-sm rounded-pill">
                                {{ unreadNotificationsCount }}
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </div>
                        <i v-else class="bi bi-bell fs-5"></i>
                    </button>
                    <button v-else class="btn">
                        <i class="bi bi-bell-slash-fill text-muted fs-5"></i>
                    </button>
                    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasUserProfile"
                        aria-controls="offcanvasUserProfile">
                        <i class="bi bi-person-circle fs-5"></i>
                    </button>
                </div>

            </div>
        </div>

        <!-- Notifications -->
        <offcanvas-view 
            :header="false"
            title="Notifications"
            model_id="offcanvasNotifications">
            <notifications-new />
        </offcanvas-view>

        <!-- Profile -->
        <offcanvas-view 
            title="My Profile"
            model_id="offcanvasUserProfile">
            <profile-view />
        </offcanvas-view>

    </nav>
</template>

<script>
import ProfileView from '../ProfileView.vue';
import OffcanvasView from '../OffcanvasView.vue';
import NotificationsNew from '../NotificationsNew.vue';

export default {
    name: 'AppTopbar',
    components: {
        ProfileView,
        OffcanvasView,
        NotificationsNew,
    },
    computed: {
        user() {
            return this.$store.getters['authy/user']
        },
        brand() {
            return this.$store.getters['repo/info']
        },
        pusherConfig() {
            return this.$store.getters['noti/pusher'];
        },
        hasNotifications() {
            return this.$store.getters['noti/hasNotifications'];
        },
        unreadNotificationsCount() {
            return this.$store.getters['noti/unreadNotifications'].length;
        },
    },
}
</script>
