import { atom } from 'recoil';

export const phoneState = atom<string>({
  key: 'phoneState',
  default: '',
});

export const setCardState = atom<string[]>({
  key: 'setCardState',
  default: [],
});
