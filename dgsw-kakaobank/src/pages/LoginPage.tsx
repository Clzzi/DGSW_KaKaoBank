import PageTemplate from 'components/Common/Base/PageTemplate';
import Login from 'components/Login';

const LoginPage = () => {
  return (
    <PageTemplate isFooter={false} isLogout={false}>
      <Login />
    </PageTemplate>
  );
};

export default LoginPage;
