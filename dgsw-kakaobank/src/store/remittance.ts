import { atom } from 'recoil';

export const bankState = atom<string>({
  key: 'bankState',
  default: '',
});
