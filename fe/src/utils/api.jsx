import axios from "axios";

const api = axios.create({
    baseURL: "https://purejavaapi.snailcamp.online/test4_war/webapi/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
