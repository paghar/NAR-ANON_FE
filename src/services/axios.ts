import axios, {AxiosError, InternalAxiosRequestConfig, AxiosResponse} from "axios";

const baseURL = "http://localhost:1337/api/";

const requestOnFullFilled = (config: InternalAxiosRequestConfig) => {
  config.baseURL = baseURL;
  return config;
};

const requestOnRejected = (error: AxiosError) => Promise.reject(error);

const responseOnFullFilled = (response: AxiosResponse) => {
  if (response.statusText === "OK" && response.config.url?.includes("plans")) {
    response.data.data = response.data?.data.map((plan: any) => {
      const thumbnail = plan?.attributes?.thumbnail.data;

      plan.attributes.thumbnail = `http://localhost:1337${
        !!thumbnail.length && thumbnail[0].attributes.url
      }`;

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
