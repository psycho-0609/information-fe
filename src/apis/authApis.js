import clientAxios from "./clientAxios";

const loginApi = {
  login: (params) => {
    const url = "/login";
    return clientAxios.post(url, params);
  },
  logout:() =>{
    const url = "/logout"
    return clientAxios.post(url);
  },
  getUser:() => {
    const url = "/api/user";
    return clientAxios.get(url);
  }
};

export default loginApi;
