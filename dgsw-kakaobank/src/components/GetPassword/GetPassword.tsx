import AuthForm from 'components/Common/AuthForm';
import useGetPassword from 'hooks/GetPassword/useGetPassword';
import React, { useEffect } from 'react';
import { UGetPassword } from 'store/common';
import { StyledButton, StyledTitle } from './GetPassword.style';

interface IGetPasswordProps {
  title: string;
  onClick: () => void;
  type: UGetPassword;
  error: string;
  onChange: (res: string) => void;
}

const GetPassword = ({
  title,
  onClick,
  type,
  error,
  onChange,
}: IGetPasswordProps): JSX.Element => {
  const { checkStorage } = useGetPassword();

  useEffect(() => {
    checkStorage(type);
  }, []);

  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <AuthForm
        title="간편인증번호 6자리를 입력하세요"
        error={error}
        onChange={onChange}
      />
      <StyledButton onClick={onClick}>다음</StyledButton>
    </>
  );
};

export default GetPassword;
