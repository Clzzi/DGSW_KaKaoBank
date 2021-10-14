import { getToken } from "./token";
import { SERVER } from "config/config.json";
import axios, { AxiosInstance } from "axios";
import { refreshToken } from "lib/token/refreshToken";

export const customAxios: AxiosInstance = axios.create({
  baseURL: SERVER,
  headers: {
    "x-access-token": getToken(),
    "Access-Control-Allow-Origin": "*",
  },
});

customAxios.interceptors.request.use(refreshToken);
