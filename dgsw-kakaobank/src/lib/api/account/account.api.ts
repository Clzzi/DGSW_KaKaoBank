import {
  IEstablishAccountDto,
  IEstablishAccountResponse,
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
  console.log(establishAccountDto);
  console.log(data);
  return data;
};
