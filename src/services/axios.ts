import { toastMessage } from "@/utils/ToastMessage";
import axios, {AxiosError, InternalAxiosRequestConfig, AxiosResponse} from "axios";

const baseURL = "http://localhost:1337/api/";

const requestOnFullFilled = (config: InternalAxiosRequestConfig) => {
  config.baseURL = baseURL;
  return config;
};

const requestOnRejected = (error: AxiosError) => Promise.reject(error);

const responseOnFullFilled = (response: AxiosResponse) =>  response


const responseOnRejected = (error: AxiosError) => {

  if (typeof window === "undefined") {
    throw "An error has occurred on the server";
  }

  if (error.message === "Network Error" && !error?.response) {
      return toastMessage("Network Error", "#d3010ad9", 2000) 
  }

  const { data }: any = error.response!;

  if (data?.message) {
    return toastMessage(data.message, "#d3010ad9", 2000) 
  }
 

  throw error?.response;
};

axios.interceptors.request.use(requestOnFullFilled, requestOnRejected);
axios.interceptors.response.use(responseOnFullFilled, responseOnRejected);

export default axios;
