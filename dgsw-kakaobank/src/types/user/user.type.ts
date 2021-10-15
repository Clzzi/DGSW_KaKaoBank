export interface IUser {
  phone: string;
  id: string;
  name: string;
  birth: string;
}

export interface IGetMyInfoResponse {
  data: IUser;
}
