import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from "axios";

let baseURL = "http://localhost:1337/api/";

const requestOnFullFilled = (config: InternalAxiosRequestConfig) => {
  config.baseURL = baseURL;
  return config;
};

const requestOnRejected = (error: AxiosError) => Promise.reject(error);

const responseOnFullFilled = (response: AxiosResponse) => {
  if (response.statusText === "OK" && response.config.url?.includes("plans")) {
    response.data.data = response.data.data.map((plan: any) => {
      plan.attributes.thumbnail = `http://localhost:1337${plan.attributes.thumbnail.data[0].attributes.url}`;

      return plan;
    });
  }

  return response;
};

const responseOnRejected = (error: AxiosError) => {
  throw error.response;
};

axios.interceptors.request.use(requestOnFullFilled, requestOnRejected);
axios.interceptors.response.use(responseOnFullFilled, responseOnRejected);

export default axios;
