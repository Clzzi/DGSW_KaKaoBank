import React, { useEffect } from 'react';
import AuthForm from 'components/Common/AuthForm';
import { StyledTitle } from './EstablishAccountPassword.style';
import Button from 'components/Common/Button';
import useEstablishAccount from 'hooks/EstablishAccount/useEstablishAccount';

const EstablishAccountPassword = (): JSX.Element => {
  const {
    passwordError,
    onChangePassword,
    onClickEstablish,
    customButtonStyle,
    checkPasswordStorage,
  } = useEstablishAccount();

  useEffect(() => {
    checkPasswordStorage();
  }, [checkPasswordStorage]);

  return (
    <>
      <StyledTitle>개설할 계좌 비밀번호를 설정해주세요</StyledTitle>
      <AuthForm
        title="계좌 비밀번호 설정"
        error={passwordError}
        onChange={onChangePassword}
        length={4}
        customErrorStyle={{ textAlign: 'center' }}
        customTitleStyle={{ textAlign: 'center' }}
      />
      <Button
        children="개설"
        customStyle={customButtonStyle}
        handleClick={onClickEstablish}
      />
    </>
  );
};

export default EstablishAccountPassword;
