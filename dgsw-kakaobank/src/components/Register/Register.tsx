import AuthInput from 'components/Common/Input/AuthInput';
import useRegister from 'hooks/Register/useRegister';
import { useEffect } from 'react';
import Form from './Form';
import { StyledTitle } from './Register.style';

const Register = () => {
  const { registerState, errorState, onChangeRegisterState, onChangeEasyPw } =
    useRegister();
  useEffect(() => {
    console.log(registerState, errorState);
  }, [registerState, errorState]);
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
      />
      <Form
        onChange={onChangeRegisterState}
        title="생년월일"
        placeholder="생년월일(8자리) 입력해주세요"
        name="birth"
        value={registerState.birth}
        error={errorState.birth}
      />
      <AuthInput length={6} onChange={onChangeEasyPw} password />
    </div>
  );
};

export default Register;
