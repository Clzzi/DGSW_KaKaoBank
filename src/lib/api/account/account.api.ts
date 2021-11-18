import {
  IEstablishAccountDto,
  IEstablishAccountResponse,
  IGetAccountInfoResponse,
  IGetMyAccountResponse,
  IGetMyAllAccountResponse,
  IGetPushRecordResponse,
  IGetReceiveRecordResponse,
  IRecordDto,
  IRemittanceDto,
} from 'types/account/account.type';
import { customAxios } from 'lib/Axios';
import { IResponse } from 'types/response/response.type';
import { Url } from 'url';

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

export const handleRemittance = async (
  remittanceDto: IRemittanceDto,
): Promise<IResponse> => {
  const url: string = `/remittance/send`;
  const { data } = await customAxios.post<IResponse>(url, remittanceDto);
  return data;
};

export const handleGetMyAllAccount =
  async (): Promise<IGetMyAllAccountResponse> => {
    const url: string = `/account/my/all`;
    const { data } = await customAxios.get<IGetMyAllAccountResponse>(url);
    return data;
  };
