import { HttpService } from "@app-core/configs";
import { environments } from "@app-environments/environment";

export const baseHttp = new HttpService(`${environments.baseApiUrl}`);
