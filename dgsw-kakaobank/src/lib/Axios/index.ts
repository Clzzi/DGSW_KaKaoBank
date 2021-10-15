import { SERVER } from 'config/config.json';
import axios, { AxiosInstance } from 'axios';
import Token from 'lib/Token';
import { refreshToken } from './refreshToken';

export const customAxios: AxiosInstance = axios.create({
  baseURL: SERVER,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'x-access-token': Token.getToken('access-token', 'session'),
  },
});

customAxios.interceptors.request.use(refreshToken);
