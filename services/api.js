import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.6.193:3000/"
});

export default api;