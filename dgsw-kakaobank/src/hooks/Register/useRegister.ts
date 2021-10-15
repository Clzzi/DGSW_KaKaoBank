import Toast from 'lib/Toast';
import makeBirth from 'util/makeBirth';
import { ChangeEvent, useState } from 'react';
import { removeHyphen } from 'util/removeHyphen';
import { ERegisterError } from 'enum/registerEnum';
import { handleRegister } from 'lib/api/auth/auth.api';
import makePhoneNumber from 'util/makePhoneNumber';
import { useRecoilState, useResetRecoilState } from 'recoil';
import registerValidation from 'validation/register.validation';
import { registerAtom, registerErrorAtom } from 'store/register';
import useLink from 'hooks/Common/useLink';

const useRegister = () => {
  const [registerState, setRegisterState] = useRecoilState(registerAtom);
  const [errorState, setErrorState] = useRecoilState(registerErrorAtom);
  const [checkTerm, setCheckTerm] = useState(false);
  const resetRegisterState = useResetRecoilState(registerAtom);
  const resetErrorState = useResetRecoilState(registerErrorAtom);
  const { handleLink: pushLogin } = useLink('/login');

  const onChangeRegisterState = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = e.target;
    if (name === 'phone') {
      setRegisterState({ ...registerState, [name]: makePhoneNumber(value) });
      onChangeErrorState({ name, value });
    } else if (name === 'birth') {
      setRegisterState({ ...registerState, [name]: makeBirth(value) });
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

  const onCheckBirth = (value: string) => {
    if (value.length !== 7) {
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

  const onClickRegister = () => {
    if (
      registerValidation.checkEmptyState(registerState) &&
      checkTerm &&
      registerValidation.checkErrorState(errorState)
    ) {
      register();
    } else {
      if (
        !registerValidation.checkErrorState(errorState) ||
        !registerValidation.checkEmptyState(registerState)
      ) {
        Toast.errorToast('제대로 작성해주세요');
      } else {
        Toast.errorToast('약관에 동의해주세요');
      }
    }
  };

  const register = async () => {
    try {
      const data = {
        id: registerState.id,
        pw: registerState.pw,
        phone: removeHyphen(registerState.phone),
        name: registerState.name,
        birth: removeHyphen(registerState.birth),
      };
      await handleRegister(data);
      resetAllState();
      pushLogin();
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  };

  const resetAllState = () => {
    resetRegisterState();
    resetErrorState();
    setCheckTerm(false);
  };

  return {
    registerState,
    errorState,
    onClickRegister,
    onChangeRegisterState,
    checkTerm,
    setCheckTerm,
    resetAllState,
  };
};

export default useRegister;
