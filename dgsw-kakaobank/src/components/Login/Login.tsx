import Form from 'components/Register/Form';
import useLogin from 'hooks/Login/useLogin';
import { StyledTitle } from './Login.style';

const Login = () => {
  const {
    id,
    pw,
    easyPw,
    idError,
    pwError,
    easyPwError,
    isEasyLogin,
    onChangeIdState,
    onChangePwState,
    onChnageEasyPwState,
    onChangeEasyLogin,
  } = useLogin();

  return (
    <div>
      <StyledTitle>
        <div>로그인</div>
        <button>간편로그인</button>
      </StyledTitle>

      <Form
        onChange={onChangeIdState}
        title="아이디"
        placeholder="아이디를 입력해주세요"
        name="id"
        value={id}
        error={idError}
      />
      <Form
        onChange={onChangePwState}
        title="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        name="pw"
        value={pw}
        error={pwError}
      />
    </div>
  );
};

export default Login;
