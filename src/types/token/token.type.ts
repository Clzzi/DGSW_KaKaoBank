import { IResponse } from 'types/response/response.type';

export interface ITokenResponse extends IResponse {
  data: {
    token: string;
  };
}
