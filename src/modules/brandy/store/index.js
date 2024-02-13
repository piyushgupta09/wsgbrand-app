import Axios from "@/services/axios";
import Router from "@/services/router";
import SweetAlert from "@/mixins/sweet-alert";

export default {
  namespaced: true,
  state: {
    myDash: [],
    parties: [],
    products: [],
    product: [],
    ledger: [],
    filteredOrders: [],
    purchases: [],
    dispatches: [],
    showBottomNav: true,
  },
  getters: {
    myDash: (state) => state.myDash,
    parties: (state) => state.parties,
    products: (state) => state.products,
    product: (state) => state.product,
    ledger: (state) => state.ledger,
    filteredOrders: (state) => state.filteredOrders,
    purchases: (state) => state.purchases,
    dispatches: (state) => state.dispatches,
    showBottomNav: (state) => state.showBottomNav,
  },
  mutations: {
    setMydash(state, payload) {
      state.myDash = payload;
    },
    setParties(state, payload) {
      state.parties = payload;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    setProduct(state, payload) {
      state.product = payload;
    },
    setLedger(state, payload) {
      state.ledger = payload;
    },
    setFilteredOrders(state, payload) {
      state.filteredOrders = payload;
    },

    setPurchases(state, payload) {
      state.purchases = payload;
    },

    setDispatches(state, payload) {
      state.dispatches = payload;
    },

    setShowBottomNav(state, payload) {
      state.showBottomNav = payload;
    },
  },
  actions: {
    setShowBottomNav({ commit }, payload) {
      commit("setShowBottomNav", payload);
    },

    async fetchMydash({ commit }) {
      // Check if user profile data exists in session storage
      const sessionData = sessionStorage.getItem("brandDashData");
      if (sessionData) {
        const parsedData = JSON.parse(sessionData);
        commit("setMydash", parsedData);
      }

      // Fetch new data via API
      try {
        const response = await Axios.get("/brand/dashboard");
        if (response.data.status === "ok") {
          // Update session storage with new data
          sessionStorage.setItem(
            "brandDashData",
            JSON.stringify(response.data.data)
          );
          // Commit new data to the Vuex store
          commit("setMydash", response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    },

    fetchParties({ commit }) {
      Axios.get("brand/parties")
        .then((response) => {
          if (response.data.status === "ok") {
            commit("setParties", response.data.data);
          } else if (response.data.status === "error") {
            alert(response.data.message);
          } else {
            alert("Something went wrong! Please try again");
          }
        })
        .catch((error) => {
          console.error("fetchParties:", error);
        });
    },

    fetchProducts({ commit }) {
      Axios.get("brand/products")
        .then((response) => {
          if (response.data.status === "ok") {
            commit("setProducts", response.data.data);
          } else if (response.data.status === "error") {
            alert(response.data.message);
          } else {
            alert("Something went wrong! Please try again");
          }
        })
        .catch((error) => {
          console.error("fetchProducts:", error);
        });
    },
    fetchProductDetails({ commit }, payload) {
      Axios.get("brand/products/" + payload)
        .then((response) => {
          if (response.data.status === "ok") {
            commit("setProduct", response.data.data);
          } else if (response.data.status === "error") {
            alert(response.data.message);
          } else {
            alert("Something went wrong! Please try again");
          }
        })
        .catch((error) => {
          console.error("fetchProductDetails:", error);
        });
    },
    toggleProductStatus({ commit }, payload) {
      Axios.put("brand/products/" + payload.product, { qtype: payload.qtype })
        .then((response) => {
          if (response.data.status === "ok") {
            commit("setProduct", response.data.data);
          } else if (response.data.status === "error") {
            alert(response.data.message);
          } else {
            alert("Something went wrong! Please try again");
          }
        })
        .catch((error) => {
          console.error("toggleProductStatus:", error);
        });
    },
    fetchProductLedger({ commit }, payload) {
      const url = `ledgers/${payload.ledger}?page=${payload.page}`;
      Axios.get(url)
        .then((response) => {
          if (response.data.status === "ok") {
            commit("setLedger", response.data.data);
          } else if (response.data.status === "error") {
            alert(response.data.message);
          } else {
            alert("Something went wrong! Please try again");
          }
        })
        .catch((error) => {
          console.error("fetchProductLedger:", error);
        });
    },

    fetchFilteredOrders({ commit }, payload) {
      const params = new URLSearchParams({
        page: payload.page,
        status: payload.status,
        search: payload.search,
      }).toString();

      const url = `orders?${params}`;

      Axios.get(url)
        .then((response) => {
          if (response.data.status === "ok") {
            commit("setFilteredOrders", response.data.data);
          } else if (response.data.status === "error") {
            alert(response.data.message);
          } else {
            alert("Something went wrong! Please try again");
          }
        })
        .catch((error) => {
          console.error("fetchFilteredOrders:", error);
        });
    },

    orderAction({ commit }, payload) {
      Axios.put("orders/" + payload.order, payload)
        .then((response) => {
          if (response.data.status === "ok") {
            commit("setLedger", response.data.data);
            SweetAlert.showSweetAlert("Great", `Order is ${payload.status} successfully`);
            Router.push({ name: "BrandDashboard" });
          } else {
            SweetAlert.showSweetError(
              "Oops!",
              "Something went wrong! Please try again"
            );
          }
        })
        .catch((error) => {
          console.error("postNewOrder:", error);
          SweetAlert.showSweetError(
            "Oops!",
            "Something went wrong! Please try again"
          );
        });
    },

    postNewOrder({ commit }, payload) {
      Axios.post("brand/orders", payload)
        .then((response) => {
          if (response.data.status === "ok") {
            commit("setLedger", response.data.data);
            SweetAlert.showSweetAlert("Great", "Order is placed successfully");
          } else {
            SweetAlert.showSweetError(
              "Oops!",
              "Something went wrong! Please try again"
            );
          }
        })
        .catch((error) => {
          console.error("postNewOrder:", error);
          SweetAlert.showSweetError(
            "Oops!",
            "Something went wrong! Please try again"
          );
        });
    },
    postNewDemand({ commit }, payload) {
      Axios.post("brand/demands", payload)
      .then((response) => {
        if (response.data.status === "ok") {
          commit("setLedger", response.data.data);
          SweetAlert.showSweetAlert("Great", "Demand is placed successfully");
        } else {
          SweetAlert.showSweetError(
            "Oops!",
            "Something went wrong! Please try again"
          );
        }
      })
      .catch((error) => {
        console.error("postNewOrder:", error);
        SweetAlert.showSweetError(
          "Oops!",
          "Something went wrong! Please try again"
        );
      });
    },
    postNewAdjustment({ commit }, payload) {
      Axios.post("adjustments", payload)
      .then((response) => {
        if (response.data.status === "ok") {
          commit("setLedger", response.data.data);
          SweetAlert.showSweetAlert("Great", "Adjustment is made successfully");
        } else {
          SweetAlert.showSweetError(
            "Oops!",
            "Something went wrong! Please try again"
          );
        }
      })
      .catch((error) => {
        console.error("postNewOrder:", error);
        SweetAlert.showSweetError(
          "Oops!",
          "Something went wrong! Please try again"
        );
      });
    },

    postStockIn({ commit }, payload) {
      Axios.post("brand/purchases", payload)
        .then((response) => {
          console.log(response.data);
          if (response.data.status === "ok") {
            commit("setDispatches", response.data.data);
            SweetAlert.showSweetAlert("Great", "Stock in done successfully");
            Router.push({ name: "BrandPurchases" });
          } else {
            SweetAlert.showSweetError(
              "Oops!",
              "Something went wrong! Please try again"
            );
          }
        })
        .catch((error) => {
          console.error("postStockIn:", error);
          SweetAlert.showSweetError(
            "Oops!",
            "Something went wrong! Please try again"
          );
        });
    },
  },
};
