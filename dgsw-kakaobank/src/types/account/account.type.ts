import { IResponse } from 'types/response/response.type';
import { IUser } from 'types/user/user.type';

export interface IEstablishAccountResponse extends IResponse {
  data: {
    accountId: string;
    money: number;
    password: string;
    userPhone: string;
    user: IUser;
  };
}

export interface IEstablishAccountDto {
  password: string;
}

export interface IEstablishAccountInfo {
  accountId: string;
  name: string;
}

export interface IGetMyAccountResponse {
  data: IAccount[];
}

export interface IAccount {
  accountId: string;
  money: string;
  userPhone: string;
}
