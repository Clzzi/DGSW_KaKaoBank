import { ERegisterError } from 'enum/registerEnum';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { registerAtom, registerErrorAtom } from 'store/register';
import makePhoneNumber from 'util/makePhoneNumber';

const useRegister = () => {
  const [registerState, setRegisterState] = useRecoilState(registerAtom);
  const [errorState, setErrorState] = useRecoilState(registerErrorAtom);

  const onChangeRegisterState = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = e.target;
    if (name === 'phone') {
      setRegisterState({ ...registerState, [name]: makePhoneNumber(value) });
      onChangeErrorState({ name, value });
    } else if (name === "birth") {
      setRegisterState({ ...registerState, [name]: value });
      onChangeErrorState({ name, value });
    } else {
      setRegisterState({ ...registerState, [name]: value });
      onChangeErrorState({ name, value });
    }
  };

  const onChangeErrorState = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    switch (name) {
      case 'rePw':
        onCheckRePW(value);
        break;
      case 'phone':
        onCheckPhone(value);
        break;
      case 'birth':
        onCheckBirth(value);
        break;
      case 'easyPw':
        onCheckEasyPw(value);
        break;
      default:
        onCheckDefault({ name, value });
        break;
    }
  };

  const onCheckDefault = ({ name, value }: { name: string; value: string }) => {
    if (value.length <= 0) {
      setErrorState({
        ...errorState,
        [name]: ERegisterError[name as keyof typeof ERegisterError],
      });
    } else {
      setErrorState({ ...errorState, [name]: '' });
    }
  };

  const onCheckEasyPw = (value: string) => {
    if (value.length !== 6) {
      setErrorState({
        ...errorState,
        easyPw: ERegisterError.easyPw,
      });
    } else {
      setErrorState({ ...errorState, easyPw: '' });
    }
  };

  const onCheckBirth = (value: string) => {
    if (value.length !== 8) {
      //TODO: 생년월일 validation
      setErrorState({
        ...errorState,
        birth: ERegisterError.birth,
      });
    } else {
      setErrorState({ ...errorState, birth: '' });
    }
  };

  const onCheckPhone = (value: string) => {
    if (value.length !== 13) {
      //TODO: 폰번호 validation
      setErrorState({
        ...errorState,
        phone: ERegisterError.phone,
      });
    } else {
      setErrorState({ ...errorState, phone: '' });
    }
  };

  const onCheckRePW = (value: string) => {
    if (registerState.pw !== value) {
      setErrorState({
        ...errorState,
        rePw: ERegisterError.rePw,
      });
    } else {
      setErrorState({ ...errorState, rePw: '' });
    }
  };

  const onChangeEasyPw = (res: string) => {
    setRegisterState({ ...registerState, easyPw: res });
    onChangeErrorState({ name: 'easyPw', value: res });
  };

  return { registerState, errorState, onChangeRegisterState, onChangeEasyPw };
};

export default useRegister;
