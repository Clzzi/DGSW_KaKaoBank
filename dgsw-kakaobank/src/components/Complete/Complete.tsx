import { UGetPassword } from 'types/common/common.type';

interface ICompleteProps {
  title: string;
  type: UGetPassword;
  bringAccount?: string;
  bringMoney?: string;
  depositAccount?: string;
  depositMoney?: string;
  remittanceGiveAccount?: string;
  remittanceReceiveAccount?: string;
  remittanceMoney?: string;
  remittanceCommission?: string;
}

const Complete = (): JSX.Element => {
  return <div>test</div>;
};

export default Complete;
