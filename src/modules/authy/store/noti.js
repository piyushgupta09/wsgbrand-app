import Axios from "@/services/axios";
// import Router from "@/services/router";
import SweetAlert from "@/mixins/sweet-alert";

export default {
  namespaced: true,
  state: {
    pusher: null,
    notifications: [],
    unreadNotifications: [],
  },
  getters: {
    pusher: state => state.pusher,
    notifications: state => state.notifications.data || [],
    unreadNotifications: state => state.unreadNotifications,
    hasNotifications: state => state.unreadNotifications.length > 0,
  },
  mutations: {
    setPusher(state, data) {
      state.pusher = data;
    },
    setNotifications(state, data) {
      state.notifications = data;
    },
    setUnreadNotifications(state, data) {
      state.unreadNotifications = data;
    },
  },
  actions: {
    async fetchPusher({ commit }) {
      try {
        const response = await Axios.get("/notifications/pusher");
        if (response.data.status === "ok") {
          commit("setPusher", response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchNotifications({ commit }) {
      try {
        const response = await Axios.get("/notifications");
        if (response.data.status === "ok") {
          commit("setNotifications", response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUnreadNotifications({ commit }) {
      try {
        const response = await Axios.get("/notifications/unread");
        if (response.data.status === "ok") {
          commit("setUnreadNotifications", response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async markAllNotificationsRead({ dispatch }) {
      try {
        const response = await Axios.post("/notifications/read");
        if (response.data.status === "ok") {
          // Re-fetch notifications to update the state
          dispatch("fetchNotifications").then(() => {
            SweetAlert.showSweetAlert("Great","All notifications marked as read");
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
    async markNotificationRead({ dispatch }, notificationId) {
      try {
        const response = await Axios.post(`/notifications/${notificationId}/read`);
        if (response.data.status === "ok") {
          dispatch("fetchUnreadNotifications");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
