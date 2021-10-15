import {
  IEstablishAccountDto,
  IEstablishAccountResponse,
  IGetAccountInfoResponse,
  IGetDepositRecord,
  IGetDepositRecordResponse,
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

export const handleGetAccountInfo = async (
  number: string,
): Promise<IGetAccountInfoResponse> => {
  const url: string = `/account/find/id/${number}`;
  const { data } = await customAxios.get<IGetAccountInfoResponse>(url);
  return data;
};

export const handleGetDepositRecord = async (
  getDepositRecordDto: IGetDepositRecord,
): Promise<IGetDepositRecordResponse> => {
  const url: string = `/remittance/record/receive`;
  const { data } = await customAxios.post<IGetDepositRecordResponse>(
    url,
    getDepositRecordDto,
  );
  return data;
};
