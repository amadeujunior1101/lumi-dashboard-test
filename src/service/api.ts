import axios, { AxiosInstance } from "axios";
const apiUrl = import.meta.env.VITE_API_URL as string;

const baseURL = apiUrl;

const api: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
