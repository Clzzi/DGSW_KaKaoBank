import PageTemplate from 'components/Common/Base/PageTemplate';
import Register from 'components/Register';

const RegisterPage = () => {
  return (
    <PageTemplate isFooter={false} isLogout={false}>
      <Register />
    </PageTemplate>
  );
};

export default RegisterPage;
