import AddAccountSetCard from 'components/AddAccountSetCard';
import PageTemplate from 'components/Common/Base/PageTemplate';

const AddAccountSetCardPage = (): JSX.Element => {
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <AddAccountSetCard />
    </PageTemplate>
  );
};

export default AddAccountSetCardPage;