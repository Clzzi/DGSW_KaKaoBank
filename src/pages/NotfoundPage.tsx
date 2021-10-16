import PageTemplate from 'components/Common/Base/PageTemplate';
import Notfound from 'components/Notfound';

const NotfoundPage = (): JSX.Element => {
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false} isLoadInfo={false}  >
      <Notfound />
    </PageTemplate>
  );
};

export default NotfoundPage;
