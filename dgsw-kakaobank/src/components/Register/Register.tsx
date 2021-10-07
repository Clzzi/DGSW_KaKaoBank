import { ChangeEvent, useEffect, useState } from 'react';
import Form from './Form';
import { StyledTitle } from './Register.style';

const Register = () => {
  const [testState, setTestState] = useState({ 1: '', 2: '', 3: '' });
  const onTestChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTestState({ ...testState, [name]: value });
  };
  useEffect(() => {
    console.log(testState);
  }, [testState]);
  return (
    <div>
      <StyledTitle>회원가입</StyledTitle>
      <Form
        onChange={onTestChange}
        title="아이디"
        placeholder="아이디를 입력해주세요"
        name="1"
        value={testState[1]}
        error="testError"
      />
    </div>
  );
};

export default Register;
