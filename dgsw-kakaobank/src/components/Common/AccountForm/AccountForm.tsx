import React, { ChangeEvent, CSSProperties } from 'react';
import InfoInput from '../Input/InfoInput';
import { StyledTitle, StyledKorean, StlyedError } from './AccountForm.style';

interface IAccountFormProps {
  title: string;
  balance: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string;
  placeholder: string;
  name: string;
  maxLength?: number;
  customTitleStyle?: CSSProperties;
  customInputStyle?: CSSProperties;
}

const AccountForm = ({
  title,
  value,
  name,
  balance,
  error,
  onChange,
  placeholder,
  customInputStyle,
  customTitleStyle,
  maxLength,
}: IAccountFormProps): JSX.Element => {
  return (
    <>
      <StyledTitle>
        <span className="title" style={customTitleStyle}>
          {title}
        </span>
        <span className="balance">
          <span className="title">잔액: </span>
          {balance}
          <span className="won"> 원</span>
        </span>
      </StyledTitle>
      <StyledKorean>오백만원</StyledKorean>
      <InfoInput
        name={name}
        value={value}
        placeholder={placeholder}
        customStyle={customInputStyle}
        onChange={onChange}
        maxLength={maxLength}        
      />
      {error && <StlyedError>{error}</StlyedError>}
    </>
  );
};

export default AccountForm;
