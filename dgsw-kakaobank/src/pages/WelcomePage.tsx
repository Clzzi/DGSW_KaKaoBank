import PageTemplate from 'components/Common/Base/PageTemplate';
import Welcome from 'components/Welcome';

const WelcomePage = () => {
  return (
    <PageTemplate isLogout={false} isFooter={false}>
      <Welcome />
    </PageTemplate>
  );
};

export default WelcomePage;
