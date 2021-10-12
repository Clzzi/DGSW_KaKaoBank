import AuthInput from 'components/Common/Input/AuthInput';
import { StyledForm } from './Form.style';

interface IFromProps {
  error: string;
  onChange: (res: string) => void;
}

const Form = ({ error, onChange }: IFromProps): JSX.Element => {
  return (
    <StyledForm>
      <div className="title">계좌 비밀번호 설정</div>
      <AuthInput length={6} onChange={onChange} password />
      {error && <div className="error">{error}</div>}
    </StyledForm>
  );
};

export default Form;
