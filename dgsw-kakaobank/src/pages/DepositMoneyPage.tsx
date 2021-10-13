import PageTemplate from 'components/Common/Base/PageTemplate';
import DepositMoney from 'components/DepositMoney';

const DepositMoneyPage = (): JSX.Element => {
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <DepositMoney />
    </PageTemplate>
  );
};

export default DepositMoneyPage;
