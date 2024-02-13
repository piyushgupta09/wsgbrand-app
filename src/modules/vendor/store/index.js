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
    bills: [],
  },
  getters: {
    myDash: (state) => state.myDash,
    orders: (state) => state.orders,
    products: (state) => state.products,
    product: (state) => state.product,
    ledger: (state) => state.ledger,
    dispatches: (state) => state.dispatches,
    bills: (state) => state.bills,
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
    setBills(state, payload) {
      state.bills = payload;
    },
  },
  actions: {
    async fetchMydash({ commit }) {
      try {
        const response = await Axios.get("/vendor/dashboard");
        if (response.data.status === "ok") {
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
            Router.push({ name: "VendorDashboard" });
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
      const url = `vendor/ledgers/${payload.ledger}?page=${payload.page || 1}`;
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
          } else if (response.data.status === "error") {
            alert(response.data.message);
          } else {
            alert("Something went wrong! Please try again");
          }
        })
        .catch((error) => {
          console.error("postNewOrder:", error);
        });
    },
    postNewDispatch({ commit }, payload) {
      Axios.post("party/dispatches", payload)
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
          console.error("postNewOrder:", error);
        });
    },
    
  },
};
