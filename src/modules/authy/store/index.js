import Axios from "@/services/axios";
import Router from "@/services/router";

export default {
  namespaced: true,
  state: {
    auth: false,
    user: {
      name: "Guest",
      email: null,
      verified: false,
      image: null,
      roles: null,
      role: null,
      prefix: null,
    },
    vemail: false, // true if verification email sent, used when registering
    profile: {},
  },
  getters: {
    user: (state) => state.user,
    isAuthenticated: (state) => state.auth,
    username: (state) => state.user.name,
    useremail: (state) => state.user.email,
    verified: (state) => state.user.verified,
    verifyEmailSent: (state) => state.vemail,
    profile: (state) => state.profile,
    getRoles: (state) => state.user.roles,
    getRole: (state) => state.user.role,
    getPrefix: (state) => state.user.prefix,
    doIHaveRole(state, role) {
      return state.user.roles.includes(role);
    }
  },
  mutations: {
    setUser(state, data) {
      state.auth = true;
      state.user = {
        name: data.name,
        email: data.email,
        verified: data.verified,
        image: data.image,
        roles: data.roles,
        role: data.role,
        prefix: data.prefix,
      };
      localStorage.setItem("auth", true);
      localStorage.setItem("name", data.name);
      localStorage.setItem("email", data.email);
      localStorage.setItem("roles", JSON.stringify(data.roles));
      localStorage.setItem("role", data.role);
      localStorage.setItem("prefix", data.prefix);
      localStorage.setItem("image", data.image);
      localStorage.setItem("verified", data.verified);
    },
    recoverUser(state) {
      state.auth = Boolean(localStorage.getItem("auth"));
      state.user = {
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        roles: JSON.parse(localStorage.getItem("roles")),
        role: localStorage.getItem("role"),
        prefix: localStorage.getItem("prefix"),
        image: localStorage.getItem("image"),
        verified: localStorage.getItem("verified"),
      };
    },
    unsetUser(state) {
      state.auth = false;
      state.user = {
        name: "Guest",
        email: null,
        roles: null,
        role: null,
        prefix: null,
        image: null,
        verified: false,
      };
      localStorage.removeItem("auth");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("roles");
      localStorage.removeItem("role");
      localStorage.removeItem("prefix");
      localStorage.removeItem("image");
      localStorage.removeItem("verified");
    },
    setVerificationEmailSend(state) {
      state.vemail = true;
    },
    setEmailVerified(state) {
      state.user.verified = true;
      localStorage.setItem("verified", true);
    },
    setUserData(state, data) {
      state.user = data;
    },
    setProfile(state, data) {
      state.profile = data;
    },
    setProfileProfile(state, data) {
      state.profile.profile = data;
    }
  },
  actions: {
    async sendRegisterRequest({ commit, dispatch }, payload) {
      await Axios.post("/register", payload)
        .then((response) => {
          if (response.data.status === "ok") {
            dispatch("saveAuthDataAndProceed", response.data.data).then(() => {
              commit("setVerificationEmailSend");
            });
          } else {
            dispatch(
              "setToast",
              {
                message: "Registration failed",
                type: "error",
              },
              {
                root: true,
              }
            );
          }
        })
        .catch((error) => {
          console.log("sendRegisterRequest", error);
        });
    },
    async sendloginViaOtpCode({ dispatch }, payload) {
      await Axios.post("/send-login-otp", payload)
        .then((response) => {
          if (response.data.status !== "ok") {
            dispatch(
              "setToast",
              {
                message: response.data.message,
                type: "error",
              },
              {
                root: true,
              }
            );
          }
        })
        .catch((error) => {
          console.log("sendloginViaOtpCode", error);
        });
    },
    async sendLoginRequest({ dispatch }, payload) {
      await Axios.post("/login", payload)
        .then((response) => {
          if (response.data.status === "ok") {
            dispatch("saveAuthDataAndProceed", response.data.data);
          } else {
            dispatch(
              "setToast",
              {
                message: "Login failed",
                type: "error",
              },
              {
                root: true,
              }
            );
          }
        })
        .catch((error) => {
          console.log("sendLoginRequest", error);
        });
    },
    async sendLogoutRequest({ dispatch }) {
      await Axios.post("/logout")
        .then((response) => {
          if (response.data.status !== "ok") {
            dispatch(
              "setToast",
              {
                message: "Logout failed",
                type: "error",
              },
              {
                root: true,
              }
            );
          }
        })
        .catch((error) => {
          console.log("sendLogoutRequest", error);
        })
        .finally(() => {
          dispatch("clearAuthData");
        });
    },
    async resendVerificationCode({ commit, dispatch }) {
      await Axios.post("/email/verification")
        .then((response) => {
          if (response.data.status === "ok") {
            commit("setVerificationEmailSend");
          } else {
            dispatch(
              "setToast",
              {
                message: "Resend failed",
                type: "error",
              },
              {
                root: true,
              }
            );
          }
        })
        .catch((error) => {
          console.log("resendVerificationCode", error);
        });
    },
    async verifyOtpCode({ commit, dispatch }, payload) {
      await Axios.post("/email/verify", {
        otp: payload,
      })
        .then((response) => {
          if (response.data.status === "ok") {
            commit("setEmailVerified");
            Router.replace({
              name: "Home",
            });
          } else {
            dispatch(
              "setToast",
              {
                message: "Verification failed",
                type: "error",
                position: "bottom",
              },
              {
                root: true,
              }
            );
          }
        })
        .catch((error) => {
          console.log("verifyOtpCode", error);
        });
    },
    async updateUser({ commit, dispatch }, payload) {
      await Axios.post("/update-user", payload)
        .then((response) => {
          if (response.data.status === "ok") {
            commit("setUserProfile", response.data.data.user);
            dispatch(
              "setToast",
              { message: response.data.message, type: "success" },
              { root: true }
            );
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async updatePassword({ dispatch }, payload) {
      await Axios.post("/update-password", payload)
        .then((response) => {
          if (response.data.status === "ok") {
            dispatch(
              "setToast",
              {
                message: "Password updated",
                type: "success",
              },
              {
                root: true,
              }
            );
            Router.replace({
              name: "ProfilePage",
            });
          } else {
            dispatch(
              "setToast",
              {
                message: "Password update failed",
                type: "danger",
              },
              {
                root: true,
              }
            );
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async validateSession({ dispatch }) {
      await Axios.post("/validate-session")
        .then((response) => {
          if (response.data.status !== "ok") {
            dispatch("setToast", {
                message: "Session expired",
                type: "error",
              },{root: true}
            );
            dispatch("clearAuthData");
          }
        })
        .catch((error) => {
          console.log("validateSession", error);
        });
    },
    saveAuthDataAndProceed({ commit }, data) {
      // Save the token
      localStorage.setItem("token", data.token);

      // Save the user data in the store
      commit("setUser", data.user);

      // Redirect to Email verification page if not verified
      if (!data.user.verified) {
        Router.replace({ name: "VerifyEmail" });
        return;
      }

      // Redirect to the initial path if set
      let initialPath = localStorage.getItem("initialPath");
      if (initialPath) {
        Router.replace({
          path: initialPath,
        });
        localStorage.removeItem("initialPath"); // remove it after using it
        return;
      }

      // Redirect to the dashboard
      Router.replace({ name: "Home" });
    },
    loadAuthData({ commit, dispatch }) {
      // maintain the user session accross refreshes
      commit("recoverUser");
      if (localStorage.getItem("token")) {
        dispatch("validateSession")
      }
    },
    clearAuthData({ commit }) {
      // Clear the token
      localStorage.removeItem("token");

      // Clear the user data from the store
      commit("unsetUser");

      // Redirect to Login page
      Router.replace({
        name: "Login",
      });
    },
    async fetchUserProfile({ commit }) {

      // Check if user profile data exists in session storage
      const sessionData = sessionStorage.getItem('userProfileData');
      if (sessionData) {
        const parsedData = JSON.parse(sessionData);
        commit("setUserData", parsedData.user);
        commit("setProfile", parsedData);
      }

      // Fetch new data via API
      try {
        const response = await Axios.get("/user-profile");
        if (response.data.status === "ok") {
          sessionStorage.setItem('userProfileData', JSON.stringify(response.data.data));
          commit("setUserData", response.data.data.user);
          commit("setProfile", response.data.data);
        }
      } catch (error) {
        console.error(error);
      }
      
    }, 
    async uploadProfile({ commit, dispatch }, payload) {
      const config = { headers: { 'Content-Type': 'multipart/form-data' }};
      await Axios.post("/upload-profile-image", payload, config)
        .then((response) => {
          if (response.data.status === "ok") {
            console.log(response.data.data);
            commit("setProfileProfile", response.data.data);
            dispatch( "setToast", { message: "Profile image updated", type: "success", }, { root: true, });
          } else {
            dispatch(
              "setToast",
              {
                message: "Profile image update failed",
                type: "danger",
              },
              {
                root: true,
              }
            );
          }
        })
        .catch((error) => {
          console.error(error);
        });
      },
  },
};
