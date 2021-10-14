import PageTemplate from 'components/Common/Base/PageTemplate';
import ConfirmInfo from 'components/ConfirmInfo';
import useDeposit from 'hooks/Deposit/useDeposit';

const DepositConfirmPage = (): JSX.Element => {
  const { onClickConfirmYes } = useDeposit();
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <ConfirmInfo
        title="계좌에 입금하시겠습니까?"
        deposit="001-01-1234567"
        money="34,221"
        onClick={onClickConfirmYes}
        type="입금"
      />
    </PageTemplate>
  );
};

export default DepositConfirmPage;
