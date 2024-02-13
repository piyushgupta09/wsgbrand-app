import Axios from "@/services/axios";
import Router from "@/services/router";
import SweetAlert from "@/mixins/sweet-alert";

export default {
  namespaced: true,
  state: {
    myDash: [],
    orders: [],

    products: [],
    product: [],
    ledger: [],

    dispatches: [],
    showBottomNav: true,
  },
  getters: {
    myDash: (state) => state.myDash,
    orders: (state) => state.orders,

    products: (state) => state.products,
    product: (state) => state.product,
    ledger: (state) => state.ledger,

    dispatches: (state) => state.dispatches,
    showBottomNav: (state) => state.showBottomNav,

  },
  mutations: {
    setMydash(state, payload) {
      state.myDash = payload;
    },
    setOrders(state, payload) {
      state.orders = payload;
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

    setDispatches(state, payload) {
      state.dispatches = payload;
    },
    setShowBottomNav(state, payload) {
      state.showBottomNav = payload;
    }
  },
  actions: {
    setShowBottomNav({ commit }, payload) {
      commit('setShowBottomNav', payload);
    },
    async fetchMydash({ commit }) {
      // Check if user profile data exists in session storage
      const sessionData = sessionStorage.getItem("factoryDashData");
      if (sessionData) {
        const parsedData = JSON.parse(sessionData);
        commit("setMydash", parsedData);
      }

      // Fetch new data via API
      try {
        const response = await Axios.get("/factory/dashboard");
        if (response.data.status === "ok") {
          // Update session storage with new data
          sessionStorage.setItem(
            "factoryDashData",
            JSON.stringify(response.data.data)
          );
          // Commit new data to the Vuex store
          commit("setMydash", response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    },

    fetchOrders({ commit }) {
      Axios.get("orders")
        .then((response) => {
          if (response.data.status === "ok") {
            commit("setOrders", response.data.data);
          } else if (response.data.status === "error") {
            alert(response.data.message);
          } else {
            alert("Something went wrong! Please try again");
          }
        })
        .catch((error) => {
          console.error("fetchOrders:", error);
        });
    },

    orderAction({ commit }, payload) {
      Axios.put("orders/" + payload.order, payload)
        .then((response) => {
          if (response.data.status === "ok") {
            commit("setLedger", response.data.data);
            SweetAlert.showSweetAlert("Great", `Order is ${payload.status} successfully`);
            if (payload.status === "accepted") {
              Router.push({ name: "FactoryPurchaseOrders" });
            } else {
              Router.push({ name: "FactoryDashboard" });
            }
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
    //       if (response.data.status === "ok") {
    //         commit("setOrders", response.data.data);
    //         // Router.push({ name: "FactoryOrders" });

    //       } else if (response.data.status === "error") {
    //         alert(response.data.message);
    //       } else {
    //         alert("Something went wrong! Please try again");
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("orderAction:", error);
    //     });
    // },

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
      const url = `ledgers/${payload.ledger}?page=${payload.page || 1}`;
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

    postNewReady({ commit }, payload) {
      Axios.post("factory/readies", payload)
        .then((response) => {
          if (response.data.status === "ok") {
            commit("setLedger", response.data.data);
            SweetAlert.showSweetAlert("Great", "Ready is added successfully");
          } else if (response.data.status === "error") {
            SweetAlert.showSweetError("Oops!", response.data.message);
          } else {
            SweetAlert.showSweetError(
              "Oops!",
              "Something went wrong! Please try again"
            );
          }
        })
        .catch((error) => {
          console.error("postNewReady:", error);
          SweetAlert.showSweetError(
            "Oops!",
            "Something went wrong! Please try again"
          );
        });
    },
    postNewDispatch({ commit }, payload) {
      Axios.post("party/dispatches", payload)
        .then((response) => {
          if (response.data.status === "ok") {
            commit("setLedger", response.data.data);
            SweetAlert.showSweetAlert("Great", "Dispatched successfully");
          } else if (response.data.status === "error") {
            SweetAlert.showSweetError("Oops!", response.data.message);
          } else {
            SweetAlert.showSweetError(
              "Oops!",
              "Something went wrong! Please try again"
            );
          }
        })
        .catch((error) => {
          console.error("postNewReady:", error);
          SweetAlert.showSweetError(
            "Oops!",
            "Something went wrong! Please try again"
          );
        });
    },
    postNewAdjustment({ commit }, payload) {
      Axios.post('adjustments', payload)
        .then(response => {
          if (response.data.status === "ok") {
            commit("setLedger", response.data.data);
            SweetAlert.showSweetAlert("Great", "Adjustment made successfully");
          } else if (response.data.status === "error") {
            SweetAlert.showSweetError("Oops!", response.data.message);
          } else {
            SweetAlert.showSweetError(
              "Oops!",
              "Something went wrong! Please try again"
            );
          }
        })
        .catch((error) => {
          console.error("postNewReady:", error);
          SweetAlert.showSweetError(
            "Oops!",
            "Something went wrong! Please try again"
          );
        });
    },
  },
};
