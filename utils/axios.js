import axios from "axios";

const dev = process.env.NODE_ENV !== "production";
const server = dev ? "http://localhost:3000" : "https://redux.imsaifun.com/";

const axiosInstance = axios.create({
    baseURL: `${server}/api`,
});

export default axiosInstance;