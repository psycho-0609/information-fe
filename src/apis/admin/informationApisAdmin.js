import clientAxios from "../clientAxios";

const informationApi = {
  getInformations: (status) => {
    const url = "/api/admin/information";
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
  addInformation: (params) => {
    const url = "/api/admin/information";
    return clientAxios.post(url, JSON.stringify(params));
  },
  getOne: (id) => {
    const url = "/api/admin/information/" + id;
    return clientAxios.get(url);
  },
  deleteOne: (id) => {
    const url = "/api/admin/information/delete/" + id;
    return clientAxios.post(url);
  },
  active: (id) => {
    const url = `/api/admin/information/${id}/active`;
    return clientAxios.put(url);
  },
  reject: (id) => {
    const url = `/api/admin/information/${id}/disable`;
    return clientAxios.put(url);
  }
};

export default informationApi;
