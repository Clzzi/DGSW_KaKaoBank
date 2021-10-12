import React from 'react';
import Form from './Form';
import { StyledTitle } from './EstablishAccountPassword.style';
import Button from 'components/Common/Button';
import useEstablishAccount from 'hooks/EstablishAccount/useEstablishAccount';

const EstablishAccountPassword = (): JSX.Element => {
  const {
    passwordError,
    onChangePassword,
    onClickEstablish,
    customButtonStyle,
  } = useEstablishAccount();
  return (
    <>
      <StyledTitle>
        <div>계좌개설을 위해</div>
        <div>비밀번호를 설정해주세요</div>
      </StyledTitle>
      <Form error={passwordError} onChange={onChangePassword} />
      <Button
        children="개설"
        customStyle={customButtonStyle}
        handleClick={onClickEstablish}
      />
    </>
  );
};

export default EstablishAccountPassword;
