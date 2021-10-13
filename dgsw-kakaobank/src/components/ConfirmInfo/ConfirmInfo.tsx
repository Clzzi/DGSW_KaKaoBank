import React, { useEffect } from 'react';
import useConfirmInfo from 'hooks/ConfirmInfo/useConfirmInfo';
import { StyledWrapper, StyledTitle, StyledButton } from './ConfirmInfo.style';
import { UConfirmInfo } from 'store/confirmInfo';

interface IConfirmInfoProps {
  title: string;
  give?: string;
  receive?: string;
  deposit?: string;
  money: string;
  commission?: string;
  type: UConfirmInfo;
  onClick: () => void;
}

const ConfirmInfo = ({
  title,
  money,
  commission,
  deposit,
  give,
  receive,
  type,
  onClick,
}: IConfirmInfoProps): JSX.Element => {
  const { onClickNo, checkStorage } = useConfirmInfo();

  useEffect(() => {
    checkStorage(type);
  }, []);

  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledWrapper>
        {give && (
          <div className="line">
            <div className="property">출금계좌: </div>
            <div className="content">{give}</div>
          </div>
        )}
        {receive && (
          <div className="line">
            <div className="property">받은계좌: </div>
            <div className="content">{receive}</div>
          </div>
        )}
        {deposit && (
          <div className="line">
            <div className="property">입금계좌: </div>
            <div className="content">{deposit}</div>
          </div>
        )}
        <div className="line">
          <div className="property">보낼금액: </div>
          <div className="content">{money} 원</div>
        </div>
        {commission && (
          <div className="line">
            <div className="property">수수료: </div>
            <div className="content">{commission} 원</div>
          </div>
        )}
      </StyledWrapper>
      <StyledButton>
        <div className="no" onClick={onClickNo}>
          아니요
        </div>
        <div className="yes" onClick={onClick}>
          예
        </div>
      </StyledButton>
    </>
  );
};

export default ConfirmInfo;
