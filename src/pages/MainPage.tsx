import PageTemplate from 'components/Common/Base/PageTemplate';
import Main from 'components/Main';

const MainPage = () => {
  return (
    <PageTemplate isHeader isFooter isLogout>
      <Main />
    </PageTemplate>
  );
};

export default MainPage;
