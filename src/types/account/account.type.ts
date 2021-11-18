import { URecord } from 'types/common/common.type';
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
  accountName: string;
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

export interface IRemittanceDto {
  sendAccountId: string;
  sendAccountPw: string;
  receiveAccountId: string;
  money: number;
}

export interface IRecord {
  money: string;
  account: string;
  date: string;
  type: URecord;
}

export interface IOtherAccount {
  accountId: string;
  phone: string;
  name: string;
}

export interface IGetMyAllAccountResponse extends IResponse {
  data: IOtherAccount[];
}