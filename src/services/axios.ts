import { getImageLink } from "@/utils/getImageLink";
import axios, {AxiosError, InternalAxiosRequestConfig, AxiosResponse} from "axios";

let baseURL = "http://127.0.0.1:1337/api/";


// if (process.env.NEXT_PUBLIC_API_URL) {
//   baseURL = process.env.NEXT_PUBLIC_API_URL + "/api/";
// }

const requestOnFullFilled = (config: InternalAxiosRequestConfig) => {
  config.baseURL = baseURL;
  return config;
};

const requestOnRejected = (error: AxiosError) => Promise.reject(error);

const responseOnFullFilled = (response: AxiosResponse) =>  response;


const responseOnRejected = (error: AxiosError) => {
  throw error;
};

axios.interceptors.request.use(requestOnFullFilled, requestOnRejected);
axios.interceptors.response.use(responseOnFullFilled, responseOnRejected);

export default axios;
