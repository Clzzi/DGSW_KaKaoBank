import PageTemplate from 'components/Common/Base/PageTemplate';
import Complete from 'components/Complete';
import useDeposit from 'hooks/Deposit/useDeposit';

const DepositCompletePage = (): JSX.Element => {
  const { onClickComplete } = useDeposit();
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <Complete
        title="입금완료"
        type="입금"
        handleClick={onClickComplete}
        depositAccount="002-02-1234567"
        depositMoney="10000"
      />
    </PageTemplate>
  );
};

export default DepositCompletePage;
