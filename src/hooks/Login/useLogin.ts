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
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { handleEasyLogin, handleLogin } from 'lib/api/auth/auth.api';
import Token from 'lib/Token';
import { userInfoState } from 'store/user';

const useLogin = () => {
  const { handleLink: pushMain } = useLink('/main');
  const [isEasyLogin, setIsEasyLogin] = useState<boolean>(false);
  const [id, setId] = useRecoilState(idState);
  const [pw, setPw] = useRecoilState(pwState);
  const [easyPw, setEasyPw] = useRecoilState(easyPwState);
  const [idError, setIdError] = useRecoilState(idErrorState);
  const [pwError, setPwError] = useRecoilState(pwErrorState);
  const [easyPwError, setEasyPwError] = useRecoilState(easyPwErrorState);
  const setUserInfo = useSetRecoilState(userInfoState);

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

  const onClickLoginBtn = () => {
    if (isEasyLogin) {
      if (id.length <= 0 || pw.length <= 0) {
        Toast.errorToast('아이디 또는 비밀번호를 제대로 입력해주세요');
        return;
      }
      login();
    } else {
      if (easyPw.length !== 6) {
        Toast.errorToast('간편비밀번호 6자리를 제대로 입력해주세요');
        return;
      }
      if (Token.getToken('easyToken', 'cookie') === undefined) {
        Toast.infoToast('간편비밀번호 설정을 해주세요');
        return;
      }
      easyLogin();
    }
  };

  const login = async () => {
    try {
      const req = { id, pw };
      const { data } = await handleLogin(req);
      setLoginToken({
        accessToken: data.token,
        refreshToken: data.refreshToken,
      });
      setUserInfo(data.user);
      pushMain();
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  };

  const easyLogin = async () => {
    try {
      const req = {
        easyLoginId: Token.getToken('easyToken', 'cookie'),
        key: easyPw,
      };
      const { data } = await handleEasyLogin(req);
      setLoginToken({
        accessToken: data.token,
        refreshToken: data.refreshToken,
      });
      setUserInfo(data.user);
      pushMain();
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  };

  const setLoginToken = ({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) => {
    Token.setToken('access-token', accessToken, 'session');
    Token.setToken('refresh-token', refreshToken, 'session');
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
    onClickLoginBtn,
  };
};

export default useLogin;
