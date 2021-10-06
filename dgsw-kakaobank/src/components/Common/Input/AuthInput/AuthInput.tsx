import useAuthInput from 'hooks/Common/useAuthInput';
import { CSSProperties, FC } from 'react';
import { StyleAuthContainer, StyledAuthInput } from './AuthInput.style';

interface IAuthInputProps {
  length?: number;
  Reg?: RegExp;
  onChange: (res: string) => void;
  password?: boolean;
  customInputStyle?: CSSProperties;
  customContainerStyle?: CSSProperties;
}

const AuthInput: FC<IAuthInputProps> = ({
  length = 6,
  Reg = new RegExp('^[A-Za-z0-9]*$'),
  customContainerStyle,
  customInputStyle,
  password,
  onChange,
}) => {
  const {
    handleOnChange,
    inputsRef,
    handleOnPaste,
    handleOnFocus,
    handleOnKeyDown,
  } = useAuthInput({ Reg, length, onChange });

  const inputs: JSX.Element[] = [];
  for (let i = 0; i < length; i++) {
    inputs.push(
      <StyledAuthInput
        key={i}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        onFocus={handleOnFocus}
        onPaste={handleOnPaste}
        type={password ? 'password' : 'text'}
        ref={(el: HTMLInputElement) => (inputsRef.current[i] = el)}
        maxLength={1}
        style={customInputStyle}
      />,
    );
  }

  return (
    <StyleAuthContainer style={customContainerStyle}>
      {inputs}
    </StyleAuthContainer>
  );
};

export default AuthInput;
