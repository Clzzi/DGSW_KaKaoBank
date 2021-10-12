import PageTemplate from 'components/Common/Base/PageTemplate';
import EstablishAccountPassword from 'components/EstablishAccountPassword';

const EstablishAccountPasswordPage = (): JSX.Element => {
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <EstablishAccountPassword />
    </PageTemplate>
  );
};

export default EstablishAccountPasswordPage;
