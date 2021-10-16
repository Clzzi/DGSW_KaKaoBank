import { AxiosRequestConfig } from 'axios';
import { getRefreshToken } from 'lib/api/token/token.api';
import Token from 'lib/Token';
import { ITokenResponse } from 'types/token/token.type';

export const refreshToken = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  let accessToken: string = Token.getToken('access-token', 'session');

  if (accessToken) {
    const decode: any = Token.decodeToken('access-token');
    const nowDate: number = Date.now() / 1000;

    if (decode.exp < nowDate) {
      const response: ITokenResponse = await getRefreshToken(accessToken);
      const { token } = response.data;
      Token.setToken('access-token', token, 'session');
      accessToken = token;
    }
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
};
