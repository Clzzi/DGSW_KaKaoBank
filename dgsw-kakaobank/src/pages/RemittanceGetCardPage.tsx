import PageTemplate from 'components/Common/Base/PageTemplate';
import GetAccountInfo from 'components/GetAccountInfo';

const RemittanceGetCardPage = (): JSX.Element => {
  return (
    <PageTemplate isFooter={false} isLogout={false} isHeader>
      <GetAccountInfo title="송금하기" nextUrl="/remittance/setcard" />
    </PageTemplate>
  );
};

export default RemittanceGetCardPage;
