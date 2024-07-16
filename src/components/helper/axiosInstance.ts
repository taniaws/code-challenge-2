import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:2002"
})

export default axiosInstance;