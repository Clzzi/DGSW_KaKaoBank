import PageTemplate from 'components/Common/Base/PageTemplate';
import Password from 'components/Password';

const PasswordPage = (): JSX.Element => {
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <Password />
    </PageTemplate>
  );
};

export default PasswordPage;
