<template>
    <div class="div">

        <nav class="navbar navbar-expand py-1 border-bottom">
            <div class="navbar-collapse d-flex align-items-center">
                <div class="d-flex align-items-center">
                    <button type="button" class="btn" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i class="bi bi-chevron-left"></i>
                    </button>
                    <h6 class="mb-0 ms-2">Notifications</h6>
                </div>
                <ul class="navbar-nav ms-auto align-items-center">
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
                    <li class="nav-item">
                        <button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasFilter" aria-expanded="false" aria-controls="offcanvasFilter">
                            <i class="bi bi-funnel"></i>
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

        <div class="collapse" id="offcanvasFilter">
            <div class="card card-body">
                <p class="mb-2 fw-bold">Filter by status</p>
                <div class="d-flex w-100 border border-end-0">
                    <div class="flex-fill border-end" v-for="(status, statusIndex) in statuses" :key="statusIndex">
                    <input type="radio" class="btn-check" :id="'filterby' + getCheckboxId(statusIndex)"
                        :value="status.value"
                        v-model="selectedStatus"
                        @change="emitFilters"
                        name="statusFilter"> 
                    <label class="btn btn-outline-dark rounded-0 border-0 w-100" :for="'filterby' + getCheckboxId(statusIndex)">
                        {{ status.text }}
                    </label>
                    </div>
                </div>
            </div>
        </div>

        <ul class="list-group list-group-flush">
            <li class="list-group-item font-title" @click="takeAction(noti)"
                v-for="(noti, notiIndex) in filteredNotifications" :key="notiIndex">
                <div v-if="noti && noti.data" class="d-flex flex-column">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <span class="fw-bold">{{ noti.data.title }}</span>
                        <small class="">{{ noti.data.time }}</small>
                    </div>
                    <div class="text-secondary">{{ noti.data.message }}</div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'NotificationsView',
    data() {
        return {
            search: '',
            selectedStatus: 'unread',
            statuses: [
                { text: 'All', value: '' },
                { text: 'Unread', value: 'unread' },
                { text: 'Read', value: 'read' },
            ],
        }
    },
    mounted() {
        this.$store.dispatch('noti/fetchUnreadNotifications');
    },
    computed: {
        notifications() {
            return this.$store.getters['noti/notifications'];
        },
        filteredNotifications() {
            let notifications = this.notifications;

            if (this.search) {
                const searchTerm = this.search.toLowerCase();
                notifications = notifications.filter((noti) => {
                    // const searchTags = notification.tags.split(',');
                    // return searchTags.some(tag => tag.toLowerCase().includes(searchTerm.trim()));
                    return noti.data.title.toLowerCase().includes(searchTerm);
                });
            }
            
            if (this.selectedStatus === 'read') {
                notifications = notifications.filter(noti => noti.readt_at === null);
            } else if (this.selectedStatus === 'unread') {
                notifications = notifications.filter(noti => noti.readt_at !== null);
            }

            return notifications;
        },
    },
    methods: {
        resetFilters() {
            this.search = '';
            this.selectedStatus = '';
        },
        takeAction(noti) {
            this.$store.dispatch('noti/markNotificationRead' , noti.id);
            console.log(noti.data.action);
            // if (action === 'myDashboard') {
            //     this.$router.push({ name: this.myDashboard });
            // }
        },
        getCheckboxId(index, type = 'status') {
            if (type === 'sortby') {
                return 'SortBy' + index;
            } else {
                return 'Status' + index;
            }
        },
        markAllRead() {
            this.$store.dispatch('noti/markAllNotificationsRead');
        },
    },
}
</script>
