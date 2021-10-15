import { IResponse } from 'types/response/response.type';
import { IUser } from 'types/user/user.type';

export interface IReceiveRecord {
  idx: number;
  senderId: string;
  money: string;
  createdAt: string;
  accountId: string;
}

export interface IPushRecord {
  idx: number;
  reciverId: string;
  money: string;
  createdAt: string;
  accountId: string;
}

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

export interface IGetAccountInfoResponse {
  data: IAccount;
}

export interface IRecordDto {
  accountId: string;
}

export interface IGetPushRecordResponse extends IResponse {
  data: IPushRecord[];
}

export interface IGetReceiveRecordResponse extends IResponse {
  data: IReceiveRecord[];
}
