import { beforeEnterRoute } from '@/modules/authy/mixins/AuthGuard';
const routes = [
    {
        path: '/deshigirl',
        name: 'BrandHome',
        component: () => import('../layouts/AppLayout.vue'),
        beforeEnter: beforeEnterRoute,
        children: [
            {
                path: "mydashboard", name: "BrandDashboard",
                component: () => import("../pages/MyDashboardPage.vue"),
            },
            {
                path: "products",
                children: [
                    {
                        path: "", name: "BrandProducts",
                        component: () => import("../pages/products/ProductsPage.vue"),
                    },
                    {
                        path: "detail/:product", name: "BrandProductDetail",
                        component: () => import("../pages/products/ProductDetailPage.vue"),
                    },
                    {
                        path: "ledger/:ledger", name: "BrandProductLedger",
                        component: () => import("../pages/products/ProductLedgerPage.vue"),
                    },
                    {
                        path: "chats/:ledger", name: "BrandLedgerChats",
                        component: () => import("../pages/products/LedgerChatsPage.vue"),
                    },
                ]
            },
            {
                path: "orders",
                children: [
                    {
                        path: "sales", name: "BrandSaleOrders",
                        component: () => import("../pages/orders/SaleOrdersPage.vue"),
                    },
                    {
                        path: "purchase", name: "BrandPurchaseOrders",
                        component: () => import("../pages/orders/PurchaseOrdersPage.vue"),
                    },
                ]
            },
            {
                path: "purchases",
                name: "Purchases",
                children: [
                    {
                        path: "pos", name: "BrandPos",
                        component: () => import("../pages/purchases/PosPage.vue"),
                    },
                    {
                        path: "incomings", name: "BrandIncomings",
                        component: () => import("../pages/purchases/IncomingsPage.vue"),
                    },
                    {
                        path: "bills", name: "BrandPurchases",
                        component: () => import("../pages/purchases/PurchaseBillsPage.vue"),
                    },
                ]
            },
            {
                path: "sales",
                name: "Sales",
                children: [
                    {
                        path: "sos", name: "BrandSos",
                        component: () => import("../pages/sales/SosPage.vue"),
                    },
                    {
                        path: "outgoings", name: "BrandOutgoings",
                        component: () => import("../pages/sales/OutgoingsPage.vue"),
                    },
                    {
                        path: "bills", name: "BrandSales",
                        component: () => import("../pages/sales/SaleBillsPage.vue"),
                    },
                ]
            },
            
            // Non Menu Pages
            {
                path: "parties", name: "BrandParties",
                component: () => import("../pages/PartiesPage.vue"),
            },
        ]
    },
]
export default routes
