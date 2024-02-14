<template>
    <div class="container-fluid my-3 font-title">
        
        <div v-if="myDash.cards && myDash.cards.length" class="row g-3 mb-3">
            <div class="col-6" v-for="(dashboard, dashboardIndex) in myDash.cards" :key="dashboardIndex">
                <DashCard :dashboard="dashboard" />
            </div>
        </div>

        <div v-if="myDash.tables && myDash.tables.length" class="mb-3">
            <div v-for="(tables, tablesIndex) in myDash.tables" :key="tablesIndex">
                <div v-for="(table, tableIndex) in tables" :key="tableIndex" class="row mb-3">
                    <div v-if="table && table.body && table.body.length" class="col-lg-6">
                        <p class="p-1 w-100 fw-bold text-bg-dark text-center mb-0 ls-1">{{ table.caption }}</p>        
                        <table class="table caption-top table-borderless table-striped table-sm my-0">
                            <dash-table-head v-if="table.head && table.head.length" :thead="table.head" />
                            <dash-table-body v-if="table.body && table.body.length" :tbody="table.body" />
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="myDash.charts && myDash.charts.length" class="row g-3">
            <div v-for="(chart, chartIndex) in myDash.charts" :key="chartIndex" class="col-lg-6">
                <DashChart :chart="chart" :chartIndex="chartIndex" />
            </div>
        </div>

    </div>
</template>

<script>
import DashCard from "@/components/DashCard.vue";
import DashChart from "@/components/DashChart.vue";
import DashTableHead from "@/components/DashTableHead.vue";
import DashTableBody from "@/components/DashTableBody.vue";

export default {
    name: "MyDashboardPage",
    components: {
        DashCard,
        DashChart,
        DashTableHead,
        DashTableBody,
    },
    computed: {
        myDash() {
            return this.$store.getters["factory/myDash"];
        },
    },
    created() {
        this.$store.dispatch("factory/fetchMydash");
    },
};
</script>
