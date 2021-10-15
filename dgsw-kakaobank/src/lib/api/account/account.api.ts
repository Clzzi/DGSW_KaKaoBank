import {
  IEstablishAccountDto,
  IEstablishAccountResponse,
  IGetAccountInfoResponse,
  IGetMyAccountResponse,
  IGetPushRecordResponse,
  IGetReceiveRecordResponse,
  IRecordDto,
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

export const handleGetPushRecord = async (
  pushRecordDto: IRecordDto,
): Promise<IGetPushRecordResponse> => {
  const url: string = `/remittance/record/send`;
  const { data } = await customAxios.post<IGetPushRecordResponse>(
    url,
    pushRecordDto,
  );
  return data;
};

export const handleGetReceiveRecord = async (
  pushRecordDto: IRecordDto,
): Promise<IGetReceiveRecordResponse> => {
  const url: string = `/remittance/record/receive`;
  const { data } = await customAxios.post<IGetReceiveRecordResponse>(
    url,
    pushRecordDto,
  );
  return data;
};
