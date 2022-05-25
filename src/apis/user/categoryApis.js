import clientAxios from "../clientAxios";

const categoryApi = {
  getCategories: () => {
    const url = "/api/user/category";
    return clientAxios.get(url);
  },
};

export default categoryApi;
