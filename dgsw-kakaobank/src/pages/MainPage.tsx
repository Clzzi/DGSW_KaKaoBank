import PageTemplate from 'components/Common/Base/PageTemplate';
import Main from 'components/Main';

const MainPage = () => {
  return (
    <PageTemplate isFooter isLogout>
      <Main />
    </PageTemplate>
  );
};

export default MainPage;
