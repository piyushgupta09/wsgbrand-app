export default {
    namespaced: true,
    state: {
        info: {
            name: "Deshigirl",
            tagline: "By Metro Fashion",
            domain: "https://desigal.in",
            logo: require("@/assets/logo.png"),
            brand: require("@/assets/brand.png"),
            mobile: "+919999437620",
        },
        monaal: {
            url: "http://localhost:8000",
            // url: "https://app.monaal.in",
        },
        links: {
            topbar: [
              {
                path: '/',
                icon: 'bi-house-door',
                name: 'Home'
              }
            ],
            footbar: {
              'manager-brand': [
                {
                  path: "BrandParties",
                  icon: "bi-people",
                  name: "Parties",
                },
                {
                  path: "BrandProducts",
                  icon: "bi-stack",
                  name: "Products",
                },
                // {
                //   path: "BrandPurchaseOrders",
                //   icon: "bi-box-seam",
                //   name: "Orders",
                // },
                {
                  path: "BrandDashboard",
                  icon: "bi-speedometer2",
                  name: "Dashboard",
                },
                {
                  path: "BrandPurchases",
                  icon: "bi-box-arrow-in-right",
                  name: "Purchases",
                },
                {
                  path: "BrandSales",
                  icon: "bi-box-arrow-right",
                  name: "Sales",
                }
              ],
              'manager-factory': [
                {
                  path: "FactoryDashboard",
                  icon: "bi-speedometer2",
                  name: "Dashboard",
                },
                {
                  path: "FactoryOrders",
                  icon: "bi-receipt-cutoff",
                  name: "Orders",
                },
                {
                  path: "FactoryPurchaseOrders",
                  icon: "bi-box-arrow-in-right",
                  name: "Purchase",
                },
                {
                  path: "FactoryLedgers",
                  icon: "bi-arrow-left-right",
                  name: "Ledger",
                },
                {
                  path: "FactoryDispatches",
                  icon: "bi-box-arrow-right",
                  name: "Sales",
                },
              ],
              'manager-vendor': [
                {
                  path: "VendorDashboard",
                  icon: "bi-speedometer2",
                  name: "Dashboard",
                },
                {
                  path: "VendorOrders",
                  icon: "bi-receipt-cutoff",
                  name: "Orders",
                },
                {
                  path: "VendorLedgers",
                  icon: "bi-arrow-left-right",
                  name: "Ledger",
                },
                {
                  path: "VendorDispatches",
                  icon: "bi-box-arrow-right",
                  name: "Sales",
                },
              ]
            },
          },
    },
    getters: {
        info: state => state.info,
        getMonaalUrl: state => state.monaal.url,
        getTopbarLinks (state) {
            return state.links.topbar
        },
        getFootbarLinks: (state) => (user) => {
        // Check if the user type exists in the state.links.footbar
        if (state.links.footbar[user]) {
            // Return the links for this user type
            return state.links.footbar[user];
        } else {
            // Return an empty array or some default set of links if the user type is not found
            return [];
        }
        },
    },
    mutations: {},
    actions: {}
}