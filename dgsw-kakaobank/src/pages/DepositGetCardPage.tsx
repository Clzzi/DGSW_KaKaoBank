import PageTemplate from 'components/Common/Base/PageTemplate';
import GetAccountInfo from 'components/GetAccountInfo';

const DepositGetCardPage = (): JSX.Element => {
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <GetAccountInfo title="입금하기" nextUrl="/deposit/money" />
    </PageTemplate>
  );
};

export default DepositGetCardPage;
