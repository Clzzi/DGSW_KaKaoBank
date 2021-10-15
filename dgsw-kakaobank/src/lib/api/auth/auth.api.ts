import { customAxios } from 'lib/Axios';
import { IResponse } from 'types/response/response.type';

interface IRegisterDto {
  id: string;
  pw: string;
  phone: string;
  name: string;
  birth: string;
}

export const handleRegister = async (
  registerDto: IRegisterDto,
): Promise<IResponse> => {
  console.log(registerDto);
  const url: string = `/auth/register`;
  const { data } = await customAxios.post<IResponse>(url, registerDto);
  return data;
};
