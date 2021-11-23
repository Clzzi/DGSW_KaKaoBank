import { atom } from 'recoil';
import { IOtherAccount } from 'types/account/account.type';

export const phoneState = atom<string>({
  key: 'phoneState',
  default: '',
});

export const setCardState = atom<IOtherAccount[]>({
  key: 'setCardState',
  default: [] as IOtherAccount[],
});

export const selectCardState = atom<string[]>({
  key: 'selectCardState',
  default: [] as string[],
});
