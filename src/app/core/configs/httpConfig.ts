import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HttpStatusCode
} from 'axios';

const accessToken = JSON.parse(localStorage.getItem('accessToken') as string) ?? 'fake-toklen';
const HTTP_TIMEOUT = 10000;

export class HttpService {
  private readonly baseHttp!: AxiosInstance;

  constructor(public apiUrl: string) {
    this.baseHttp = axios.create({
      baseURL: apiUrl,
      timeout: HTTP_TIMEOUT,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    this.baseHttp.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(new Error(error))
    );

    this.baseHttp.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.status === HttpStatusCode.Unauthorized) {
          console.log('Logout or do something');
        }
        return Promise.reject(error);
      }
    );
  }

  public get<T, D = unknown, R = AxiosResponse<T, D>>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.baseHttp.get<T, R, D>(url, config);
  }

  public post<T, D = unknown, R = AxiosResponse<T, D>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.baseHttp.post<T, R, D>(url, data, config);
  }

  public put<T, D = unknown, R = AxiosResponse<T, D>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.baseHttp.put<T, R, D>(url, data, config);
  }

  public delete<T, D = unknown, R = AxiosResponse<T, D>>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.baseHttp.delete<T, R, D>(url, config);
  }
}
