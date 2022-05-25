import clientAxios from "../clientAxios";

const categoryApi = {
  getCategories: (status) => {
    const url = "/api/admin/category";
    if (status) {
      return clientAxios.get(url, {
        params: {
          status: status
        }
      });
    } else {
      return clientAxios.get(url);
    }
  },
  addCategory: (params) => {
    const url = "/api/admin/category";
    return clientAxios.post(url, JSON.stringify(params));
  },
  getOne: (id) => {
    const url = "/api/admin/category/" + id;
    return clientAxios.get(url);
  },
  deleteOne: (id) => {
    const url = "/api/admin/category/" + id;
    return clientAxios.put(url);
  }

};

export default informationApi;
