import { beforeEnterRoute } from '@/modules/authy/mixins/AuthGuard';

const routes = [
    {
        path: '/vendor',
        component: () => import('../layouts/AppLayout.vue'),
        beforeEnter: beforeEnterRoute,
        children: [
            {
                path: "mydashboard",
                name: "VendorDashboard",
                component: () => import("../pages/MyDashboardPage.vue"),
            },
            {
                path: "new-orders",
                name: "VendorOrders",
                component: () => import("../pages/NewOrdersPage.vue"),
            },
            {
                path: "ledgers",
                children: [
                    {
                        path: "",
                        name: "VendorLedgers",
                        component: () => import("../pages/ledgers/LedgersPage.vue"),
                    },
                    {
                        path: ":ledger",
                        name: "VendorLedgerDetail",
                        component: () => import("../pages/ledgers/LedgerDetailPage.vue"),
                    },
                    {
                        path: "chats/:ledger",
                        name: "VendorLedgerChats",
                        component: () => import("../pages/ledgers/LedgerChatsPage.vue"),
                    },
                ]
            },
            {
                path: "sales",
                children: [
                    {
                        path: "dispatches",
                        name: "VendorDispatches",
                        component: () => import("../pages/sales/DispatchesPage.vue"),
                    },
                    {
                        path: "bills",
                        name: "VendorSales",
                        component: () => import("../pages/sales/PurchasesPage.vue"),
                    },
                ]
            },
        ]
    },
]

export default routes
