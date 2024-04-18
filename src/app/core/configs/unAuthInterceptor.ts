import { AxiosError, HttpStatusCode } from "axios";

import { baseHttp } from "@app-shared/services";

baseHttp.httpInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.status === HttpStatusCode.Unauthorized) {
      console.log("Logout or do something");
    }
    return Promise.reject(error);
  }
);
