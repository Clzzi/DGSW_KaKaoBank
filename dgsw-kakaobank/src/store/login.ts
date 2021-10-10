import { atom } from 'recoil';

export const idState = atom<string>({
  key: 'idState',
  default: '',
});

export const pwState = atom<string>({
  key: 'pwState',
  default: '',
});

export const easyPwState = atom<string>({
  key: 'easyPwState',
  default: '',
});

export const idErrorState = atom<string>({
  key: 'idErrorState',
  default: '',
});

export const pwErrorState = atom<string>({
  key: 'pwErrorState',
  default: '',
});

export const easyPwErrorState = atom<string>({
  key: 'easyPwErrorState',
  default: '',
});
