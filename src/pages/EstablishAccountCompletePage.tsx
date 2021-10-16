import PageTemplate from 'components/Common/Base/PageTemplate';
import EstablishAccountComplete from 'components/EstablishAccountComplete';

const EstablishAccountCompletePage = (): JSX.Element => {
  return (
    <PageTemplate isFooter={false} isHeader isLogout={false}>
      <EstablishAccountComplete />
    </PageTemplate>
  );
};

export default EstablishAccountCompletePage;
