import { ApiResponse } from "@/interface";
import axios, { AxiosRequestConfig } from "axios";

const { VITE_BASE_URL, VITE_KAKAO_RESTAPI_KEY } = import.meta.env;

const api = axios.create({
  baseURL: VITE_BASE_URL,
  timeout: 1000 * 15,
});

export const get = async (
  url: string,
  params: any = null,
  timeout?: number
): Promise<ApiResponse> => {
  const configs: AxiosRequestConfig = await getConfig(params);

  if (timeout) {
    configs.timeout = timeout;
  }

  const res: ApiResponse = await api.get(url, configs);

  return res;
};

export const post = async (
  url: string,
  data: any,
  customHeader: any = {},
  timeout?: number
): Promise<any> => {
  const configs: any = await getConfig(null);

  if (timeout) {
    configs.timeout = timeout;
  }

  if (customHeader) {
    Object.keys(customHeader).forEach((key) => {
      configs[key] = customHeader[key];
    });
  }

  const res: ApiResponse = await api.post(url, data, configs);

  return res;
};

export const put = async (
  url: string,
  data: any,
  timeout?: number
): Promise<ApiResponse> => {
  const configs: AxiosRequestConfig = await getConfig(null);

  if (timeout) {
    configs.timeout = timeout;
  }

  const response: ApiResponse = await api.put(url, data, configs);

  return response;
};

export const deleteMethod = async (
  url: string,
  params: any = null,
  timeout?: number
): Promise<ApiResponse> => {
  const configs: AxiosRequestConfig = await getConfig(params);

  if (timeout) {
    configs.timeout = timeout;
  }

  const response: ApiResponse = await api.delete(url, configs);

  return response;
};

export function serialize(obj: any) {
  const str: string =
    "?" +
    Object.keys(obj)
      .reduce(function (a: any, k) {
        a.push(k + "=" + encodeURIComponent(obj[k]));
        return a;
      }, [])
      .join("&");
  return str;
}

const getConfig = async (payload: any = null): Promise<AxiosRequestConfig> =>
  new Promise((resolve, reject) => {
    const config: AxiosRequestConfig = {
      ...payload,
    };

    try {
      config.headers = {};

      if (VITE_KAKAO_RESTAPI_KEY) {
        config.headers = {
          Authorization: `KakaoAK ${VITE_KAKAO_RESTAPI_KEY}`,
        };
      }
    } catch (e) {
      reject(e);
    } finally {
      resolve(config);
    }
  });

const ApiService = {
  post,
  get,
  put,
  deleteMethod,
  serialize,
};

export default ApiService;
