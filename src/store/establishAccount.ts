import { atom } from 'recoil';
import { IEstablishAccountInfo } from 'types/account/account.type';

export const accountPasswordState = atom<string>({
  key: 'accountPasswordState',
  default: '',
});

export const establishAccountInfoState = atom<IEstablishAccountInfo>({
  key: 'establishAccountInfoState',
  default: {} as IEstablishAccountInfo,
});

export const accountNameState = atom<string>({
  key: "accountNameState",
  default: "",
})
