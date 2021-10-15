import React from 'react';
import AuthForm from 'components/Common/AuthForm';
import Button from 'components/Common/Button';
import usePassword from 'hooks/Password/usePassword';
import { StyledTitle } from './Password.style';
const Password = (): JSX.Element => {
  const { onChangePassword, customButtonStyle, passwordError, onClickNext } =
    usePassword();
  return (
    <>
      <StyledTitle>간편비밀번호 설정</StyledTitle>
      <AuthForm
        title="간편비밀번호 6자리를 입력해주세요"
        error={passwordError}
        onChange={onChangePassword}
      />
      <Button
        handleClick={onClickNext}
        children="설정"
        customStyle={customButtonStyle}
      />
    </>
  );
};

export default Password;
