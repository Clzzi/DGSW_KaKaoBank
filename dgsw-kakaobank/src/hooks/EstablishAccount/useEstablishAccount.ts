import useLink from 'hooks/Common/useLink';
import { CSSProperties, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { accountPasswordState } from 'store/establishAccount';
import { ColorPalette } from 'styles/ColorPalette';

const useEstablishAccount = () => {
  const { handleLink: pushNext } = useLink('/establish/complete');
  const [password, setPassword] = useRecoilState<string>(accountPasswordState);
  const [passwordError, setPasswordError] = useState('');

  const onChangePassword = (res: string) => {
    setPassword(res);
    checkPasswordError(res);
  };

  const checkPasswordError = (res: string) => {
    if (res.length < 6) {
      setPasswordError('비밀번호를 올바르게 입력해주세요');
    } else {
      setPasswordError('');
    }
  };

  const customButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: ColorPalette.main,
      color: ColorPalette.fureBlack,
    };
  }, []);

  const onClickEstablish = () => {
    if (password.length === 6) {
      pushNext();
    }
  };

  return {
    password,
    passwordError,
    setPassword,
    setPasswordError,
    onChangePassword,
    customButtonStyle,
    onClickEstablish,
  };
};

export default useEstablishAccount;
