import {
  StyledCardHistoryWrapper,
  StyledHistoryOption,
} from './CardHistory/CardHistory.style';
import React, { useEffect } from 'react';
import CardHistory from './CardHistory';
import Button from 'components/Common/Button';
import useDetailCard from 'hooks/DetailCard/useDetailCard';
import { StyledMoney, StyledTitle, StyledTopWrapper } from './DetailCard.style';
import makeAccountNumber from 'util/makeAccountNumber';
import getCompany from 'util/getCompany';
import makeMoneyComma from 'util/makeMoneyComma';
import CopyToClipboard from 'react-copy-to-clipboard';

const DetailCard = (): JSX.Element => {
  const {
    onClickBring,
    loadRecord,
    onClickOption,
    option,
    customBringButtonStyle,
    number,
    record,
    getAccountInfo,
    card,
  } = useDetailCard();

  useEffect(() => {
    getAccountInfo();
    loadRecord();
  }, []);

  return (
    <>
      <StyledTopWrapper>
        <StyledTitle>
          <div className="company">{getCompany(number as string)}</div>
          <CopyToClipboard text={number as string}>
            <div className="number">{makeAccountNumber(number as string)}</div>
          </CopyToClipboard>
        </StyledTitle>
        <StyledMoney>
          {makeMoneyComma(card.money)}
          <span className="won"> 원</span>
        </StyledMoney>
        <Button
          children="가져오기"
          customStyle={customBringButtonStyle}
          handleClick={onClickBring}
        />
      </StyledTopWrapper>
      <StyledHistoryOption onClick={onClickOption}>
        {option}
      </StyledHistoryOption>
      <StyledCardHistoryWrapper>
        {record &&
          record.map((v) => {
            return (
              <CardHistory
                account={v.account}
                money={v.money}
                type={v.type}
                date={v.date}
              />
            );
          })}
      </StyledCardHistoryWrapper>
    </>
  );
};

export default DetailCard;
