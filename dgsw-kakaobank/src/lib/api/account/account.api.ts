import {
  IEstablishAccountDto,
  IEstablishAccountResponse,
  IGetMyAccountResponse,
} from 'types/account/account.type';
import { customAxios } from 'lib/Axios';

export const handleEstablishAccount = async (
  establishAccountDto: IEstablishAccountDto,
): Promise<IEstablishAccountResponse> => {
  const url: string = `/account`;
  const { data } = await customAxios.post<IEstablishAccountResponse>(
    url,
    establishAccountDto,
  );
  return data;
};

export const handleGetMyAccount = async (): Promise<IGetMyAccountResponse> => {
  const url: string = `/account/find/my`;
  const { data } = await customAxios.get<IGetMyAccountResponse>(url);
  return data;
};
