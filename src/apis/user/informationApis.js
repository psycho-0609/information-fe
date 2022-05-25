import clientAxios from "../clientAxios";

const informationApiUser = {
    getInformations: () => {
        const url = "/api/user/information";
        return clientAxios.get(url);
    },
    addInformation: (params) => {
        const url = "/api/user/information";
        return clientAxios.post(url, JSON.stringify(params));
    },
    getOne: (id) => {
        const url = "/api/user/information/" + id;
        return clientAxios.get(url);
    },
    deleteOne: (id) => {
        const url = "/api/user/information/delete/" + id;
        return clientAxios.post(url);
    },
    getUserContribution: () => {
        const url = "/api/user/information/contribution";
        return clientAxios.get(url);
    },
    
};

export default informationApiUser;
