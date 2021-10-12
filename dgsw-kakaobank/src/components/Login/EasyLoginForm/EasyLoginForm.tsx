import AuthInput from 'components/Common/Input/AuthInput';
import { StyledEasyLoginForm } from './EasyLoginForm.style';

interface IEasyLoinFormProps {
  error: string;
  onChange: (res: string) => void;
}

const EasyLoginForm = ({
  error,
  onChange,
}: IEasyLoinFormProps): JSX.Element => {
  return (
    <StyledEasyLoginForm>
      <div className="title">간편비밀번호 6자리를 입력하세요</div>
      <AuthInput length={6} onChange={onChange} password />
      {error && <div className="error">{error}</div>}
    </StyledEasyLoginForm>
  );
};

export default EasyLoginForm;
