import { atom } from 'recoil';
import { IUser } from 'types/user/user.type';

export const userInfoState = atom<IUser>({
  key: 'userInfoState',
  default: {} as IUser,
});
