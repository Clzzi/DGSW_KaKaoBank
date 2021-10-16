import axios from 'axios';
import { SERVER } from 'config/config.json';
import { ITokenResponse } from 'types/token/token.type';

export const getRefreshToken = async (
  accessToken: string,
): Promise<ITokenResponse> => {
  const { data } = await axios.post<ITokenResponse>(`${SERVER}/token/refresh`, {
    accessToken,
  });
  return data;
};
