import axios, {AxiosError, InternalAxiosRequestConfig, AxiosResponse} from "axios";

const baseURL = "http://localhost:1337/api/";

const requestOnFullFilled = (config: InternalAxiosRequestConfig) => {
  config.baseURL = baseURL;
  return config;
};

const requestOnRejected = (error: AxiosError) => Promise.reject(error);

const responseOnFullFilled = (response: AxiosResponse) =>  response


const responseOnRejected = (error: AxiosError) => {
  throw error.response;
};

axios.interceptors.request.use(requestOnFullFilled, requestOnRejected);
axios.interceptors.response.use(responseOnFullFilled, responseOnRejected);

export default axios;
