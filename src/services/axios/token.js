import Cookies from "js-cookie";

const setAuthHeader = (config) => {
  let token = Cookies.get("token") || localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete config.headers["Authorization"];
  }
  return config;
};

export default {
  setAuthHeader,
};
