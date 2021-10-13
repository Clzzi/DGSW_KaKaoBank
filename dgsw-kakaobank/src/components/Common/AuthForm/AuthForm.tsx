import AuthInput from '../Input/AuthInput';
import { StyledForm } from './AuthForm.style';

interface IAuthFormProps {
  title: string;
  error: string;
  onChange: (res: string) => void;
}

const AuthForm = ({ title, onChange, error }: IAuthFormProps): JSX.Element => {
  return (
    <StyledForm>
      <div className="title">{title}</div>
      <AuthInput length={6} onChange={onChange} password />
      {error && <div className="error">{error}</div>}
    </StyledForm>
  );
};

export default AuthForm;
