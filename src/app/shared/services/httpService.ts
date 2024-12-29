import { HttpConfig } from '@app-core/configs';
import { environments } from '@app-environments/environment';

export const http = new HttpConfig(`${environments.baseApiUrl}`);
