import { beforeEnterRoute } from '@/modules/authy/mixins/AuthGuard';

const routes = [
    {
        path: '/factory',
        component: () => import('../layouts/AppLayout.vue'),
        beforeEnter: beforeEnterRoute,
        children: [
            {
                path: "mydashboard",
                name: "FactoryDashboard",
                component: () => import("../pages/MyDashboardPage.vue"),
            },
            {
                path: "new-orders",
                name: "FactoryOrders",
                component: () => import("../pages/NewOrdersPage.vue"),
            },
            {
                path: "purchases",
                children: [
                    {
                        path: "orders",
                        name: "FactoryPurchaseOrders",
                        component: () => import("../pages/purchases/PurchaseOrdersPage.vue"),
                    },
                    {
                        path: "bills",
                        name: "FactoryPurchaseBills",
                        component: () => import("../pages/purchases/PurchaseBillsPage.vue"),
                    },
                ]
            },
            {
                path: "ledgers",
                children: [
                    {
                        path: "",
                        name: "FactoryLedgers",
                        component: () => import("../pages/ledgers/LedgersPage.vue"),
                    },
                    {
                        path: ":ledger",
                        name: "FactoryLedgerDetail",
                        component: () => import("../pages/ledgers/LedgerDetailPage.vue"),
                    },
                    {
                        path: "chats/:ledger",
                        name: "FactoryLedgerChats",
                        component: () => import("../pages/ledgers/LedgerChatsPage.vue"),
                    },
                ]
            },
            {
                path: "sales",
                children: [
                    {
                        path: "dispatches",
                        name: "FactoryDispatches",
                        component: () => import("../pages/sales/DispatchesPage.vue"),
                    },
                    {
                        path: "bills",
                        name: "FactorySales",
                        component: () => import("../pages/sales/PurchasesPage.vue"),
                    },
                ]
            },
        ]
    },
]

export default routes
