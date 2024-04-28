import { AxiosError, HttpStatusCode } from "axios";
import { baseHttp } from "@app-shared/services";

const accessToken = JSON.parse(localStorage.getItem("accessToken") as string);

baseHttp.httpInstance.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

baseHttp.httpInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.status === HttpStatusCode.Unauthorized) {
      console.log("Logout or do something");
    }
    return Promise.reject(error);
  }
);
