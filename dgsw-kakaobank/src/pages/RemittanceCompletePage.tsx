import PageTemplate from 'components/Common/Base/PageTemplate';
import Complete from 'components/Complete';
import useRemittance from 'hooks/Remittance/useRemittance';

const RemittanceCompletePage = (): JSX.Element => {
  const { onClickComplete } = useRemittance();
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <Complete
        title="이체완료"
        type="송금"
        handleClick={onClickComplete}
        remittanceCommission="3,000"
        remittanceGiveAccount="001-01-1234567"
        remittanceMoney="12,345"
        remittanceReceiveAccount="002-02-1234567"
      />
    </PageTemplate>
  );
};

export default RemittanceCompletePage;
