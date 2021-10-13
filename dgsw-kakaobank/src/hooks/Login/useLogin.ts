import {
  easyPwErrorState,
  easyPwState,
  idErrorState,
  idState,
  pwErrorState,
  pwState,
} from 'store/login';
import Toast from 'lib/Toast';
import { ChangeEvent, useState } from 'react';
import { ELoginEnum } from 'enum/loginEnum';
import useLink from 'hooks/Common/useLink';
import { useRecoilState, useResetRecoilState } from 'recoil';

const useLogin = () => {
  const { handleLink: pushMain } = useLink('/main');
  const [isEasyLogin, setIsEasyLogin] = useState<boolean>(false);
  const [id, setId] = useRecoilState(idState);
  const [pw, setPw] = useRecoilState(pwState);
  const [easyPw, setEasyPw] = useRecoilState(easyPwState);
  const [idError, setIdError] = useRecoilState(idErrorState);
  const [pwError, setPwError] = useRecoilState(pwErrorState);
  const [easyPwError, setEasyPwError] = useRecoilState(easyPwErrorState);
  const resetIdState = useResetRecoilState(idState);
  const resetPwState = useResetRecoilState(pwState);
  const resetEasyPwState = useResetRecoilState(easyPwState);
  const resetIdErrorState = useResetRecoilState(idErrorState);
  const resetPwErrorState = useResetRecoilState(pwErrorState);
  const resetEasyPwErrorState = useResetRecoilState(easyPwErrorState);
  
  const onChangeEasyLogin = () => {
    setIsEasyLogin((prev) => !prev);
    resetIdState();
    resetPwState();
    resetEasyPwState();
    resetIdErrorState();
    resetPwErrorState();
    resetEasyPwErrorState();
  };

  const onChangeIdState = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    checkIdErrorState(e.target.value);
  };

  const checkIdErrorState = (value: string) => {
    if (value.length <= 0) {
      setIdError(ELoginEnum.id);
    } else {
      resetIdErrorState();
    }
  };

  const onChangePwState = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
    checkPwErrorState(e.target.value);
  };

  const checkPwErrorState = (value: string) => {
    if (value.length <= 0) {
      setPwError(ELoginEnum.pw);
    } else {
      resetPwErrorState();
    }
  };

  const onChnageEasyPwState = (res: string) => {
    setEasyPw(res);
    checkEasyPwErrorState(res);
  };

  const checkEasyPwErrorState = (value: string) => {
    if (value.length < 6) {
      setEasyPwError(ELoginEnum.easyPw);
    } else {
      resetEasyPwErrorState();
    }
  };

  const checkEmptyState = () => {
    if (isEasyLogin) {
      if (easyPw.length !== 6) {
        Toast.errorToast('간편비밀번호 6자리를 제대로 입력해주세요');
        return;
      }
      Toast.successToast('ok');
      pushMain();
    } else {
      if (id.length <= 0 || pw.length <= 0) {
        Toast.errorToast('아이디 또는 비밀번호를 제대로 입력해주세요');
        return;
      }
      Toast.successToast('ok');
      pushMain();
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
    checkEmptyState,
  };
};

export default useLogin;
