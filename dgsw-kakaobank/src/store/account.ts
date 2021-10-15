import { atom } from 'recoil';
import { IAccount } from 'types/account/account.type';

export const myCardState = atom<IAccount[]>({
  key: 'myCardState',
  default: [] as IAccount[],
});
