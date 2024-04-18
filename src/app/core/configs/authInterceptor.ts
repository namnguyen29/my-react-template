import { baseHttp } from "@app-shared/services";

const token = "FAKE-TOKEN";

baseHttp.httpInstance.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
