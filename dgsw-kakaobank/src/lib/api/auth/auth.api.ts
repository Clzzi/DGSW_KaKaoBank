import { customAxios } from 'lib/Axios';
import {
  IEasyLoginDto,
  IEasyLoginResponse,
  ILoginDto,
  ILoginResponse,
  IRegisterDto,
} from 'types/auth/auth.type';
import { IResponse } from 'types/response/response.type';

export const handleRegister = async (
  registerDto: IRegisterDto,
): Promise<IResponse> => {
  const url: string = `/auth/register`;
  const { data } = await customAxios.post<IResponse>(url, registerDto);
  return data;
};

export const handleLogin = async (
  loginDto: ILoginDto,
): Promise<ILoginResponse> => {
  console.log(loginDto);
  const url: string = `/auth/login`;
  const { data } = await customAxios.post<ILoginResponse>(url, loginDto);
  return data;
};

export const handleEasyLogin = async (
  loginDto: IEasyLoginDto,
): Promise<IEasyLoginResponse> => {
  console.log(loginDto);
  const url: string = `/auth/easy/login`;
  const { data } = await customAxios.post<IEasyLoginResponse>(url, loginDto);
  console.log(data);
  return data;
};
