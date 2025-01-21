import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8084/test4_war/webapi/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
