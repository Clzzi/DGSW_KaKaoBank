import { CSSProperties } from 'react';
import AuthInput from '../Input/AuthInput';
import { StyledForm } from './AuthForm.style';

interface IAuthFormProps {
  title: string;
  error: string;
  onChange: (res: string) => void;
  length?: number;
  customTitleStyle?: CSSProperties;
  customErrorStyle?: CSSProperties;
}

const AuthForm = ({
  title,
  onChange,
  error,
  customErrorStyle,
  customTitleStyle,
  length = 6,
}: IAuthFormProps): JSX.Element => {
  return (
    <StyledForm>
      <div className="title" style={customTitleStyle}>
        {title}
      </div>
      <AuthInput length={length} onChange={onChange} password />
      {error && (
        <div className="error" style={customErrorStyle}>
          {error}
        </div>
      )}
    </StyledForm>
  );
};

export default AuthForm;
