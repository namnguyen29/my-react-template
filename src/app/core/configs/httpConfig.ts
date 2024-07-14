import axios, { AxiosInstance } from 'axios';

export class HttpService {
  private readonly baseHttp!: AxiosInstance;

  constructor(public apiUrl: string) {
    this.baseHttp = axios.create({
      baseURL: apiUrl
    });
  }

  public get httpInstance(): AxiosInstance {
    return this.baseHttp;
  }
}
