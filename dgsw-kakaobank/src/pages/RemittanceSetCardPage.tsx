import PageTemplate from 'components/Common/Base/PageTemplate';
import RemittanceSetCard from 'components/RemittanceSetCard';

const RemittanceSetCardPage = (): JSX.Element => {
  return (
    <PageTemplate isFooter={false} isLogout={false} isHeader>
      <RemittanceSetCard />
    </PageTemplate>
  );
};

export default RemittanceSetCardPage;
