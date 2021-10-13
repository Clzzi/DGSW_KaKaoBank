import React, { useEffect } from 'react';
import { UGetPassword } from 'types/common/common.type';
import { StyledButton, StyledTitle, StyledWrapper } from './Complete.style';
import { ReactComponent as Check } from 'assets/icon/check.svg';
import useComplete from 'hooks/Complete/useComplete';

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
  handleClick: () => void;
}

const Complete = (Props: ICompleteProps): JSX.Element => {
  const { checkStorage } = useComplete();
  const {
    title,
    depositAccount,
    bringMoney,
    bringAccount,
    type,
    depositMoney,
    remittanceCommission,
    remittanceGiveAccount,
    remittanceMoney,
    remittanceReceiveAccount,
    handleClick,
  } = Props;

  useEffect(() => {
    checkStorage(type);
  }, []);

  return (
    <>
      <StyledTitle>
        <Check width={100} height={100} />
        <div className="title">{title}</div>
      </StyledTitle>
      <StyledWrapper>
        {remittanceGiveAccount && (
          <div className="line">
            <span className="property">출금 계좌: </span>
            <span className="content">{remittanceGiveAccount}</span>
          </div>
        )}

        {remittanceReceiveAccount && (
          <div className="line">
            <span className="property">받는 계좌: </span>
            <span className="content">{remittanceReceiveAccount}</span>
          </div>
        )}

        {remittanceMoney && (
          <div className="line">
            <span className="property">보낸 금액: </span>
            <span className="content">{remittanceMoney} 원</span>
          </div>
        )}

        {remittanceCommission && (
          <div className="line">
            <span className="property">수수료: </span>
            <span className="content">{remittanceCommission} 원</span>
          </div>
        )}

        {depositAccount && (
          <div className="line">
            <span className="property">입금 계좌: </span>
            <span className="content">{depositAccount}</span>
          </div>
        )}

        {depositMoney && (
          <div className="line">
            <span className="property">입금한 금액: </span>
            <span className="content">{depositMoney} 원</span>
          </div>
        )}

        {bringAccount && (
          <div className="line">
            <span className="property">가져온 계좌: </span>
            <span className="content">{bringAccount}</span>
          </div>
        )}

        {bringMoney && (
          <div className="line">
            <span className="property">가져온 금액: </span>
            <span className="content">{bringMoney} 원</span>
          </div>
        )}
      </StyledWrapper>
      <StyledButton onClick={handleClick}>완료</StyledButton>
    </>
  );
};

export default Complete;
