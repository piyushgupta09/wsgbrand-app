<template>
    <router-link :to="{ name: dashboard.route }" class="text-decoration-none text-dark">
        <div class="d-flex flex-column justify-content-evenly p-2 border-start"
            :style="{ 'border-color': dashboard.border + '!important', 'background-color': dashboard.bg }"
            style="border-width: 0.75rem !important">
            <div class="d-flex flex-fill justify-content-between align-items-center fs-3 lh-1 pt-2">
                <span class="fw-bold">{{ dashboard.value }}</span>
            </div>
            <div class="d-flex justify-content-between align-items-end">
                <span class="fw-bold">{{ dashboard.title }}</span>
                <i class="bi px-2 fs-2" :class="dashboard.icon"></i>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'DashCard',
    props: ['dashboard']
}
</script>
