import { StyledTitle } from './Register.style';
import Form from 'components/Common/Form';
import useRegister from 'hooks/Register/useRegister';
import Term from './Term';
import Button from 'components/Common/Button';
import { useEffect } from 'react';

const Register = () => {
  const {
    checkTerm,
    setCheckTerm,
    registerState,
    errorState,
    onChangeRegisterState,
    onClickRegister,
    resetAllState,
  } = useRegister();

  useEffect(() => {
    resetAllState();
  }, []);

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
        customInputStyle={{ marginBottom: '4px' }}
      />
      <Form
        onChange={onChangeRegisterState}
        title="아이디"
        placeholder="아이디를 입력해주세요"
        name="id"
        value={registerState.id}
        error={errorState.id}
        customInputStyle={{ marginBottom: '4px' }}
      />
      <Form
        onChange={onChangeRegisterState}
        title="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        name="pw"
        value={registerState.pw}
        error={errorState.pw}
        customInputStyle={{ marginBottom: '4px' }}
      />
      <Form
        onChange={onChangeRegisterState}
        title="비밀번호 재입력"
        placeholder="비밀번호를 다시 입력해주세요"
        type="password"
        name="rePw"
        value={registerState.rePw}
        error={errorState.rePw}
        customInputStyle={{ marginBottom: '4px' }}
      />
      <Form
        onChange={onChangeRegisterState}
        title="전화번호"
        placeholder="전화번호를 입력해주세요"
        name="phone"
        value={registerState.phone}
        error={errorState.phone}
        maxLength={13}
        customInputStyle={{ marginBottom: '4px' }}
      />
      <Form
        onChange={onChangeRegisterState}
        title="생년월일"
        placeholder="생년월일(7자리) 입력해주세요"
        name="birth"
        value={registerState.birth}
        error={errorState.birth}
        maxLength={8}
        customInputStyle={{ marginBottom: '4px' }}
      />
      <Term onClick={() => setCheckTerm((prev) => !prev)} check={checkTerm} />
      <Button children="회원가입" handleClick={onClickRegister} />
    </div>
  );
};

export default Register;
