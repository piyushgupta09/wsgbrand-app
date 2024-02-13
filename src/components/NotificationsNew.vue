<template>
    <div class="div">

        <nav class="navbar navbar-expand py-1 border-bottom">
            <div class="navbar-collapse d-flex align-items-center">
                <div class="d-flex align-items-center">
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i class="bi bi-chevron-left"></i>
                    </button>
                    <h6 class="mb-0 ms-2">New Notifications</h6>
                </div>
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item me-2">
                        <router-link class="btn fs-4 lh-1 border-0" :to="{ name: 'NotificationsPage' }">
                            <i class="bi bi-archive"></i>
                        </router-link>
                    </li>
                    <li class="nav-item me-2">
                        <button class="btn fs-4 lh-1 border-0" @click="markAllRead">
                            <i class="bi bi-check2-square"></i>
                        </button>
                    </li>
                    <li class="nav-item me-3">
                        <button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasSearch" aria-expanded="false" aria-controls="offcanvasSearch">
                            <i class="bi bi-search"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="collapse" id="offcanvasSearch">
            <div class="form-floating mx-2 mb-2">
                <input v-model.lazy="search" type="search" class="form-control rounded-0" placeholder="Search Notifications" />
                <label for="floatingInput">Search here ...</label>
            </div>
        </div>

        <ul class="list-group list-group-flush">
            <li class="list-group-item font-title" @click="takeAction(noti)"
                v-for="(noti, notiIndex) in filteredNotifications" :key="notiIndex">
                <div v-if="noti && noti.data" class="d-flex flex-column">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <span class="fw-bold">{{ noti.data.title }}</span>
                        <small class="">{{ noti.created_at }}</small>
                    </div>
                    <div class="text-secondary">{{ noti.data.body }}</div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'NotificationsNew',
    data() {
        return {
            search: '',
        }
    },
    mounted() {
        this.$store.dispatch('noti/fetchUnreadNotifications');
    },
    computed: {
        unreadNotifications() {
            return this.$store.getters['noti/unreadNotifications'];
        },
        filteredNotifications() {
            let noties = this.unreadNotifications;

            if (this.search) {
                const searchTerm = this.search.toLowerCase();
                noties = noties.filter((noti) => {
                    // const searchTags = notification.tags.split(',');
                    // return searchTags.some(tag => tag.toLowerCase().includes(searchTerm.trim()));
                    return noti.data.message.toLowerCase().includes(searchTerm);
                });
            }
        
            return noties;
        },
    },
    methods: {
        takeAction(noti) {
            this.$store.dispatch('noti/markNotificationRead' , noti.id);
            const url = noti.data.actionUrl;
            const [path, query] = url.split('?');
            if (query) {
                const queryParams = query.split('&');
                const queryObj = {};
                queryParams.forEach((param) => {
                    const [key, value] = param.split('=');
                    queryObj[key] = value;
                });
                this.$router.push({ path, query: queryObj });
            } else {
                this.$router.push({ path });
            }
        },
        markAllRead() {
            this.$store.dispatch('noti/markAllNotificationsRead');
        },
    },
}
</script>
