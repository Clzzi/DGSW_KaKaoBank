import { atom } from 'recoil';

export const accountPasswordState = atom<string>({
  key: 'accountPasswordState',
  default: '',
});
