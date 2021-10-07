import { atom } from 'recoil';
import {
  IRegisterErrorTypes,
  IRegisterTypes,
} from 'types/register/register.type';

export const registerAtom = atom<IRegisterTypes>({
  key: 'registerAtom',
  default: {
    id: '',
    pw: '',
    rePw: '',
    easyPw: '',
    phone: '',
    name: '',
    birth: '',
  },
});

export const registerErrorAtom = atom<IRegisterErrorTypes>({
  key: 'registerErrorAtom',
  default: {
    idErr: '',
    pwErr: '',
    rePwErr: '',
    easyPwErr: '',
    phoneErr: '',
    nameErr: '',
    birthErr: '',
  },
});
