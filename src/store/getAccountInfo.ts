import { atom } from 'recoil';

export const cardState = atom<string>({
  key: 'cardState',
  default: '',
});
