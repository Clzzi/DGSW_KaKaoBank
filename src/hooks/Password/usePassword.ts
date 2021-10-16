import useLink from 'hooks/Common/useLink';
import { handleEasyRegister } from 'lib/api/auth/auth.api';
import Toast from 'lib/Toast';
import Token from 'lib/Token';
import { CSSProperties, useMemo, useState } from 'react';
import { ColorPalette } from 'styles/ColorPalette';

const usePassword = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const { handleLink: pushMain } = useLink('/main');

  const onChangePassword = (value: string) => {
    setPassword(value);
    checkPasswordError(value);
  };

  const checkPasswordError = (value: string) => {
    if (value.length < 6) {
      setPasswordError('비밀번호를 제대로 입력해주세요');
    } else {
      setPasswordError('');
    }
  };

  const onClickNext = () => {
    if (password.length === 6 && passwordError === '') {
      easyRegister();
    } else {
      Toast.infoToast('비밀번호를 제대로 입력해주세요');
    }
  };

  const easyRegister = async () => {
    try {
      const req = { key: password };
      const { data } = await handleEasyRegister(req);
      setEasyToken(data);
      Toast.successToast('간편로그인 설정 성공');
      pushMain();
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  };

  const setEasyToken = (token: string) => {
    Token.setToken('easyToken', token, 'cookie');
  };

  const customButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: ColorPalette.main,
      color: ColorPalette.fureBlack,
      marginTop: '65px',
    };
  }, []);

  return {
    onChangePassword,
    passwordError,
    customButtonStyle,
    onClickNext,
  };
};

export default usePassword;
