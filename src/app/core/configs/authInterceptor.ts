import { baseHttp } from "@app-shared/services";

const accessToken = JSON.parse(localStorage.getItem("accessToken") as string);

baseHttp.httpInstance.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
