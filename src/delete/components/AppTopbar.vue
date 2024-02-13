<template>
    <nav class="navbar fixed-top bg-body-tertiary border-bottom">
        <div class="container">
            <div class="d-flex justify-content-between w-100">
                <div class="d-flex flex-fill">
                    <div class="pe-2 me-1">
                        <img :src="brand.logo" :alt="brand.name" width="30">
                    </div>
                    <div class="d-flex flex-fill flex-column justify-content-center">
                        <span class="font-title fs-5 lh-1 fw-bold">{{ brand.name }}</span>
                        <span class="fw-500 ls-1 smaller font-subtitle">{{ brand.tagline }}</span>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-end">
                    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNotifications"
                        aria-controls="offcanvasNotifications">
                        <i class="bi bi-bell fs-5"></i>
                    </button>
                    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasUserProfile"
                        aria-controls="offcanvasUserProfile">
                        <i class="bi bi-person-circle fs-5"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNotifications" aria-labelledby="offcanvasNotificationsLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNotificationsLabel">My Notifications</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0">
                <notifications-view />
            </div>
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasUserProfile" aria-labelledby="offcanvasUserProfileLabel">
            <div class="offcanvas-header pt-2 pb-1">
                <h5 class="offcanvas-title" id="offcanvasUserProfileLabel">My Profile</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0">
                <profile-view :user="user" />
            </div>
        </div>
    </nav>
</template>

<script>
import ProfileView from './ProfileView.vue'
import NotificationsView from './NotificationsView.vue'

export default {
    name: 'AppTopbar',
    components: {
        ProfileView,
        NotificationsView,
    },
    computed: {
        user() {
            return this.$store.getters['authy/user']
        },
        brand() {
            return this.$store.getters['repo/info']
        },
    }
}
</script>
