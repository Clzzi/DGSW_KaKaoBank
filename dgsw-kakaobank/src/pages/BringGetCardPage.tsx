import PageTemplate from 'components/Common/Base/PageTemplate';
import GetAccountInfo from 'components/GetAccountInfo';

const BringGetCardPage = (): JSX.Element => {
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <GetAccountInfo title="은행선택" nextUrl="/bring/money" />
    </PageTemplate>
  );
};

export default BringGetCardPage;
