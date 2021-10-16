import { atom } from 'recoil';

export const pushAccountMoneyState = atom<string>({
  key: 'pushAccountMoneyState',
  default: '0',
});
