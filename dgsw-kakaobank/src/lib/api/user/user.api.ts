import { customAxios } from "lib/Axios";
import { IGetMyInfoResponse } from "types/user/user.type";

export const handleGetMyInfo = async() => {
  const url: string = `/user/my`;
  const { data } = await customAxios.get<IGetMyInfoResponse>(url);
  return data;
}