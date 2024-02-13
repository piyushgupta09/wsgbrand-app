<template>
    <div class="div">

        <nav class="navbar navbar-expand py-1 border-bottom">
            <div class="navbar-collapse d-flex align-items-center">
                <div class="d-flex align-items-center">
                    <router-link :to="{ name: getMyDashboard }" class="btn border-0">
                        <i class="bi bi-chevron-left"></i>
                    </router-link>
                    <h6 class="mb-0 ms-2">All Notifications</h6>
                </div>
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item">
                        <button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasSearch" aria-expanded="false" aria-controls="offcanvasSearch">
                            <i class="bi bi-search"></i>
                        </button>
                    </li>
                    <li class="nav-item me-3">
                        <button class="btn fs-5 border-0" data-bs-toggle="collapse" data-bs-target="#offcanvasFilter" aria-expanded="false" aria-controls="offcanvasFilter">
                            <i class="bi bi-funnel"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="collapse" id="offcanvasSearch">
            <div class="form-floating mx-2 mb-2">
                <input v-model.lazy="filters.search" type="search" class="form-control rounded-0" placeholder="Search Notifications" />
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
                        v-model="filters.selectedStatus"
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
                v-for="(noti, notiIndex) in notifications" :key="notiIndex">
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
import Axios from '@/services/axios';

export default {
    name: 'NotificationsPage',
    data() {
        return {
            page: 1,
            isFetching: false,
            notifications: [],
            filters: {
                perPage: 10,
                startdate: '',
                enddate: '',
                search: '',
                selectedStatus: 'read',
            },
            statuses: [
                { text: 'All', value: '' },
                { text: 'Unread', value: 'unread' },
                { text: 'Read', value: 'read' },
            ],
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.loadMore();
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    watch: {
        filters: {
            handler() {
                console.log('Filters changed');
                this.page = 1;
                this.notifications = [];
                this.loadMore();
            },
            deep: true,
        },
    },
    computed: {
        prefix() {
            return this.$store.getters['authy/getPrefix'];
        },
        getMyDashboard() {
            let myDashboardRouteName = this.prefix + 'Dashboard';
            myDashboardRouteName = myDashboardRouteName.charAt(0).toUpperCase() + myDashboardRouteName.slice(1);
            return myDashboardRouteName;
        }
    },
    methods: {
        handleScroll() {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (clientHeight + scrollTop >= scrollHeight - 5) { // Check if near bottom
                this.loadMore();
            }
        },
        loadMore() {
            if (this.isFetching)
                return;
            this.isFetching = true;

            const params = new URLSearchParams({
                page: this.page,
                search: this.filters.search,
                status: this.filters.selectedStatus,
                startdate: this.filters.startdate,
                enddate: this.filters.enddate,
            });
            
            Axios.get(`notifications?${params}&perpage=${this.filters.perPage}`).then(response => {
                    if (response.data.status === 'ok') {
                        this.notifications = [...this.notifications, ...response.data.data.data];
                        this.page++;
                        this.isFetching = false;
                    }
                    else if (response.data.status === 'error') {
                        this.isFetching = false;
                        console.log(response.data.message);
                    }
                    else {
                        this.isFetching = false;
                        console.log('Something went wrong! Please try again');
                    }
                }).catch((error) => {
                    this.isFetching = false;
                    console.log(error);
                });
        },
        handleFiltersChange(filters) {
            this.filters = filters;
        },
        resetFilters() {
            this.search = '';
            this.selectedStatus = '';
        },
        takeAction(noti) {
            const url = noti.data.actionUrl;
            const [path, query] = url.split('?');

            let basePath = this.prefix === 'brand' ? '/deshigirl' : '/' + this.prefix;
            let fullPath = basePath + '/' + path;

            if (query) {
                const queryParams = query.split('&');
                const queryObj = {};
                queryParams.forEach(param => {
                    const [key, value] = param.split('=');
                    queryObj[key] = value;
                });
                this.$router.push({ path: fullPath, query: queryObj });
            } else {
                this.$router.push({ path: fullPath });
            }
        },
        getCheckboxId(index, type = 'status') {
            if (type === 'sortby') {
                return 'SortBy' + index;
            } else {
                return 'Status' + index;
            }
        },
    },
}
</script>
