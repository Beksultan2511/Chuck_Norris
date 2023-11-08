import axios from 'axios';
import { API_CONFIG } from '~/shared/constants/api.config';

export const api = axios.create(API_CONFIG);

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status >= 400 && !originalRequest._retry) {
      originalRequest._retry = true;
    }

    return Promise.reject(error);
  },
);
