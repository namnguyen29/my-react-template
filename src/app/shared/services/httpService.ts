import { HttpService } from '@app-core/configs';
import { environments } from '@app-environments/environment';

export const http = new HttpService(`${environments.baseApiUrl}`);
