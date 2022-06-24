import axios from "axios";

export const baseUrl = "https://";

const axiosInstance = axios.create({
    baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, "Error de red");
    }
);

export { axiosInstance };