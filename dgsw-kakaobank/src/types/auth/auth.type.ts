import { IResponse } from 'types/response/response.type';
import { IUser } from 'types/user/user.type';

export interface IRegisterTypes {
  id: string;
  pw: string;
  rePw: string;
  phone: string;
  name: string;
  birth: string;
}

export interface IRegisterErrorTypes {
  id: string;
  pw: string;
  rePw: string;
  phone: string;
  name: string;
  birth: string;
}

export interface IRegisterDto {
  id: string;
  pw: string;
  phone: string;
  name: string;
  birth: string;
}

export interface ILoginDto {
  id: string;
  pw: string;
}

export interface ILoginResponse extends IResponse {
  data: {
    user: IUser;
    token: string;
    refreshToken: string;
  };
}

export interface IEasyLoginDto {
  easyLoginId: string;
  key: string;
}

export interface IEasyLoginResponse extends IResponse {
  data: {
    user: IUser;
    token: string;
    refreshToken: string;
  };
}

export interface IEasyRegisterResponse extends IResponse {
  data: string
}