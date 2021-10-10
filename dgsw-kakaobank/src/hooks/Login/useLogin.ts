import { ELoginEnum } from 'enum/loginEnum';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  easyPwErrorState,
  easyPwState,
  idErrorState,
  idState,
  pwErrorState,
  pwState,
} from 'store/login';

const useLogin = () => {
  const [isEasyLogin, setIsEasyLogin] = useState<boolean>(false);
  const [id, setId] = useRecoilState(idState);
  const [pw, setPw] = useRecoilState(pwState);
  const [easyPw, setEasyPw] = useRecoilState(easyPwState);
  const [idError, setIdError] = useRecoilState(idErrorState);
  const [pwError, setPwError] = useRecoilState(pwErrorState);
  const [easyPwError, setEasyPwError] = useRecoilState(easyPwErrorState);

  useEffect(() => {
    console.log(easyPwError);
  }, [easyPwError]);

  const onChangeEasyLogin = () => {
    setIsEasyLogin((prev) => !prev);
  };

  const onChangeIdState = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    checkIdErrorState(e.target.value);
  };

  const checkIdErrorState = (value: string) => {
    if (value.length <= 0) {
      setIdError(ELoginEnum.id);
    }
  };

  const onChangePwState = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
    checkPwErrorState(e.target.value);
  };

  const checkPwErrorState = (value: string) => {
    if (value.length <= 0) {
      setPwError(ELoginEnum.pw);
    }
  };

  const onChnageEasyPwState = (e: ChangeEvent<HTMLInputElement>) => {
    setEasyPw(e.target.value);
    checkEasyPwErrorState(e.target.value);
  };

  const checkEasyPwErrorState = (value: string) => {
    if (value.length <= 0) {
      setEasyPwError(ELoginEnum.easyPw);
    }
  };

  return {
    id,
    pw,
    easyPw,
    idError,
    pwError,
    easyPwError,
    isEasyLogin,
    onChangeIdState,
    onChangePwState,
    onChnageEasyPwState,
    onChangeEasyLogin,
  };
};

export default useLogin;
