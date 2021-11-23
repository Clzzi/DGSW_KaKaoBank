import React, { useEffect } from 'react';
import AuthForm from 'components/Common/AuthForm';
import {
  StyledAccountNameTitle,
  StyledTitle,
} from './EstablishAccountPassword.style';
import Button from 'components/Common/Button';
import useEstablishAccount from 'hooks/EstablishAccount/useEstablishAccount';
import InfoInput from 'components/Common/Input/InfoInput';

const EstablishAccountPassword = (): JSX.Element => {
  const {
    passwordError,
    onChangePassword,
    onClickEstablish,
    customButtonStyle,
    checkPasswordStorage,
    accountName,
    setAccountName,
  } = useEstablishAccount();

  useEffect(() => {
    checkPasswordStorage();
  }, [checkPasswordStorage]);

  useEffect(() => {
    console.log(accountName);
  }, [accountName]);

  return (
    <>
      <StyledTitle>개설할 계좌 정보를 입력해주세요</StyledTitle>
      <StyledAccountNameTitle>계좌 이름 입력</StyledAccountNameTitle>
      <InfoInput
        name="accountName"
        value={accountName}
        onChange={(e) => {
          setAccountName(e.target.value);
        }}
        type="text"
        placeholder="계좌 이름을 기입해주세요"
        customStyle={{ marginBottom: '118px' }}
      />
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
