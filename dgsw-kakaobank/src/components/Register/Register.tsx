import {
  StyledEasyPw,
  StyledEasyPwError,
  StyledEasyPwTitle,
  StyledTitle,
} from './Register.style';
import Form from './Form';
import useRegister from 'hooks/Register/useRegister';
import AuthInput from 'components/Common/Input/AuthInput';

const Register = () => {
  const { registerState, errorState, onChangeRegisterState, onChangeEasyPw } =
    useRegister();
  return (
    <div>
      <StyledTitle>회원가입</StyledTitle>
      <Form
        onChange={onChangeRegisterState}
        title="이름"
        placeholder="이름을 입력해주세요"
        name="name"
        value={registerState.name}
        error={errorState.name}
      />
      <Form
        onChange={onChangeRegisterState}
        title="아이디"
        placeholder="아이디를 입력해주세요"
        name="id"
        value={registerState.id}
        error={errorState.id}
      />
      <Form
        onChange={onChangeRegisterState}
        title="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        name="pw"
        value={registerState.pw}
        error={errorState.pw}
      />
      <Form
        onChange={onChangeRegisterState}
        title="비밀번호 재입력"
        placeholder="비밀번호를 다시 입력해주세요"
        type="password"
        name="rePw"
        value={registerState.rePw}
        error={errorState.rePw}
      />
      <Form
        onChange={onChangeRegisterState}
        title="전화번호"
        placeholder="전화번호를 입력해주세요"
        name="phone"
        value={registerState.phone}
        error={errorState.phone}
        maxLength={13}
      />
      <Form
        onChange={onChangeRegisterState}
        title="생년월일"
        placeholder="생년월일(7자리) 입력해주세요"
        name="birth"
        value={registerState.birth}
        error={errorState.birth}
        maxLength={8}
      />
      <StyledEasyPw>
        <StyledEasyPwTitle>간편인증번호</StyledEasyPwTitle>
        <AuthInput length={6} onChange={onChangeEasyPw} password />
        {errorState.easyPw && (
          <StyledEasyPwError> {errorState.easyPw}</StyledEasyPwError>
        )}
      </StyledEasyPw>
    </div>
  );
};

export default Register;
