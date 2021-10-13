import React from 'react';
import { UGetPassword } from 'types/common/common.type';
import { StyledTitle } from './Complete.style';
import { ReactComponent as Check } from 'assets/icon/check.svg';

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

const Complete = (Props: ICompleteProps): JSX.Element => {
  const {
    depositAccount,
    bringMoney,
    bringAccount,
    type,
    title,
    depositMoney,
    remittanceCommission,
    remittanceGiveAccount,
    remittanceMoney,
    remittanceReceiveAccount,
  } = Props;

  return (
    <>
      <StyledTitle>
        <Check />
        <div className="title">{title}</div>
      </StyledTitle>
    </>
  );
};

export default Complete;
