import { customAxios } from 'lib/Axios';
import { ILoginDto, ILoginResponse, IRegisterDto } from 'types/auth/auth.type';
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
  console.log(data);
  return data;
};
