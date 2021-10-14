import PageTemplate from 'components/Common/Base/PageTemplate';
import ConfirmInfo from 'components/ConfirmInfo';
import useRemittance from 'hooks/Remittance/useRemittance';

const RemittanceConfirmPage = (): JSX.Element => {
  const { onClickConfirmYes } = useRemittance();
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <ConfirmInfo
        title="신중빈에게 송금 하시겠습니까?"
        give="001-01-1234567"
        receive="002-02-4562382"
        commission="1,000"
        money="34,221"
        onClick={onClickConfirmYes}
        type="송금"
      />
    </PageTemplate>
  );
};

export default RemittanceConfirmPage;
