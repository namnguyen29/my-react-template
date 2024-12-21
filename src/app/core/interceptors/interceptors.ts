import { AxiosError, HttpStatusCode } from 'axios';

import { http } from '@app-shared/services';

const accessToken = JSON.parse(localStorage.getItem('accessToken') as string);

http.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(new Error(error))
);

http.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.status === HttpStatusCode.Unauthorized) {
      console.log('Logout or do something');
    }
    return Promise.reject(error);
  }
);
