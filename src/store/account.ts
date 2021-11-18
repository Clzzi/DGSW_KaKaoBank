import { atom } from 'recoil';
import { IAccount, IRecord } from 'types/account/account.type';
import { UOption } from 'types/common/common.type';

export const myCardState = atom<IAccount[]>({
  key: 'myCardState',
  default: [] as IAccount[],
});

export const detailCardInfoState = atom<IAccount>({
  key: 'detailCardInfoState',
  default: { money: '', userPhone: '', accountId: '' },
});

export const detailCardOptionState = atom<UOption>({
  key: 'detailCardOptionState',
  default: '과거순',
});

export const detailCardRecordState = atom<IRecord[]>({
  key: 'detailCardRecord',
  default: [] as IRecord[],
});

export const myAccountIdState = atom<string[]>({
  key: 'myAccountIdState',
  default: [] as string[],
});
