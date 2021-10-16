import PageTemplate from 'components/Common/Base/PageTemplate';
import ConfirmInfo from 'components/ConfirmInfo';
import useRemittanceConfirm from 'hooks/Remittance/useRemittanceConfirm';
import makeAccountNumber from 'util/makeAccountNumber';
import makeMoneyComma from 'util/makeMoneyComma';

const RemittanceConfirmPage = (): JSX.Element => {
  const { push, receive, money, onClickConfirmYes } = useRemittanceConfirm();
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <ConfirmInfo
        title={`${push}로 송금하시겠습니까?`}
        give={makeAccountNumber(push as string)}
        receive={makeAccountNumber(receive as string)}
        commission="0"
        money={makeMoneyComma(money as string)}
        onClick={onClickConfirmYes}
      />
    </PageTemplate>
  );
};

export default RemittanceConfirmPage;
