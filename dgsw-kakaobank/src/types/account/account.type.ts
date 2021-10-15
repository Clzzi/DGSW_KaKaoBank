import { IResponse } from 'types/response/response.type';

export interface IEstablishAccountResponse extends IResponse {
  data: {
    accountId: string;
    money: number;
    userPhone: string;
  };
}

export interface IEstablishAccountDto {
  password: string;
}
