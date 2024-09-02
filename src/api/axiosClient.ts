import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';


const apiClient: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
