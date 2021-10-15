import Toast from 'lib/Toast';
import { CSSProperties, useMemo, useState } from 'react';
import { ColorPalette } from 'styles/ColorPalette';

const usePassword = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

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
      // TODO: API
    } else {
      Toast.infoToast('비밀번호를 제대로 입력해주세요');
    }
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
