import axios from "axios";
import queryString from "query-string";
const clientAxios = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
  withCredentials: true,
});
clientAxios.interceptors.request.use(async (config) => {
  if (typeof window !== "undefined") {
    const token = sessionStorage?.getItem("token");
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});
clientAxios.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default clientAxios;
