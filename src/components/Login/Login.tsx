import Button from 'components/Common/Button';
import Form from 'components/Common/Form';
import useLogin from 'hooks/Login/useLogin';
import AuthForm from 'components/Common/AuthForm';
import { StyledLoginForm, StyledTitle } from './Login.style';

const Login = () => {
  const {
    id,
    pw,
    idError,
    pwError,
    easyPwError,
    isEasyLogin,
    onChangeIdState,
    onChangePwState,
    onChnageEasyPwState,
    onChangeEasyLogin,
    onClickLoginBtn,
  } = useLogin();

  return (
    <div>
      <StyledTitle>
        <div>로그인</div>
        <button onClick={onChangeEasyLogin}>
          {isEasyLogin ? '간편로그인' : '로그인'}
        </button>
      </StyledTitle>

      {isEasyLogin ? (
        <StyledLoginForm>
          <Form
            onChange={onChangeIdState}
            title="아이디"
            placeholder="아이디를 입력해주세요"
            name="id"
            value={id}
            error={idError}
            customInputStyle={{ marginBottom: '4px' }}
          />
          <Form
            onChange={onChangePwState}
            title="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="pw"
            value={pw}
            error={pwError}
            customInputStyle={{ marginBottom: '4px' }}
          />
        </StyledLoginForm>
      ) : (
        <AuthForm
          title="간편비밀번호 6자리를 입력하세요"
          error={easyPwError}
          onChange={onChnageEasyPwState}
        />
      )}
      <Button children="로그인" handleClick={onClickLoginBtn} />
    </div>
  );
};

export default Login;
