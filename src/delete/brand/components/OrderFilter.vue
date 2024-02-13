<template>
    <div class="container d-flex my-2">
        <div class="form-outline d-flex flex-fill" style="border-radius: 0% !important;">
            <input v-model="search" @input="emitFilters" type="search" class="form-control" placeholder="Search Orders"
                style="border-top-right-radius: 0px !important; border-bottom-right-radius: 0px;" />
        </div>
        <div class="mx-2">
            <div class="input-group h-100">
                <select class="form-select" id="status-select" v-model="status" @change="emitFilters">
                    <option v-for="(statusName, statusIndex) in statuses" :key="statusIndex" :value="statusName">
                        {{ statusName.charAt(0).toUpperCase() + statusName.slice(1) }}
                    </option>
                </select>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'FabFilter',
    props: {
        filters: {
            type: Object,
            default: () => ({}),
        },
        statuses: {
            type: Array,
            default: () => ['issued', 'accepted', 'rejected', 'cancelled'],
        },
    },
    data() {
        return {
            search: '',
            status: '',
        }
    },
    mounted() {
        this.search = this.filters.search || '';
        this.status = this.filters.status || '';
        this.emitFilters();
    },
    methods: {
        emitFilters() {
            this.$emit('order-filters-updated', { search: this.search, status: this.status });
        },
    },

}
</script>
