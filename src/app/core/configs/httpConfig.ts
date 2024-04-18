import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";

export class HttpService {
  private readonly http!: AxiosInstance;

  constructor(public apiUrl: string) {
    this.http = axios.create({
      baseURL: apiUrl,
    });
  }

  public get httpInstance(): AxiosInstance {
    return this.http;
  }

  public get<T, D = unknown, R = AxiosResponse<T, D>>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.http.get<T, R, D>(url, config);
  }

  public put<T, D = unknown, R = AxiosResponse<T, D>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.http.put<T, R, D>(url, data, config);
  }

  public delete<T, D = unknown, R = AxiosResponse<T, D>>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.http.delete<T, R, D>(url, config);
  }

  public post<T, D = unknown, R = AxiosResponse<T, D>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.http.post<T, R, D>(url, data, config);
  }
}
