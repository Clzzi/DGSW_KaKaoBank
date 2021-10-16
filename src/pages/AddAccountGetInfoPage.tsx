import AddAccountGetInfo from 'components/AddAccountGetInfo';
import PageTemplate from 'components/Common/Base/PageTemplate';

const AddAccountGetInfoPage = (): JSX.Element => {
  return (
    <PageTemplate isFooter={false} isHeader isLogout={false}>
      <AddAccountGetInfo />
    </PageTemplate>
  );
};

export default AddAccountGetInfoPage;
