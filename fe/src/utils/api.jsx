import axios from "axios";

const api = axios.create({
    baseURL: "https://purejavaapi.snailcamp.online/test4/webapi/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
