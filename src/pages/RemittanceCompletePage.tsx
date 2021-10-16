import PageTemplate from 'components/Common/Base/PageTemplate';
import Complete from 'components/Complete';
import useRemittanceComplete from 'hooks/Remittance/useRemittanceComplete';
import makeAccountNumber from 'util/makeAccountNumber';
import makeMoneyComma from 'util/makeMoneyComma';

const RemittanceCompletePage = (): JSX.Element => {
  const { push, receive, money, onClickComplete } = useRemittanceComplete();
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <Complete
        title="이체완료"
        type="송금"
        handleClick={onClickComplete}
        remittanceCommission="0"
        remittanceGiveAccount={makeAccountNumber(push as string)}
        remittanceMoney={makeMoneyComma(money as string)}
        remittanceReceiveAccount={makeAccountNumber(receive as string)}
      />
    </PageTemplate>
  );
};

export default RemittanceCompletePage;
