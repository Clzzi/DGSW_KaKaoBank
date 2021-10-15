import {
  StyledCardHistoryWrapper,
  StyledHistoryOption,
} from './CardHistory/CardHistory.style';
import React from 'react';
import CardHistory from './CardHistory';
import Button from 'components/Common/Button';
import useDetailCard from 'hooks/DetailCard/useDetailCard';
import { StyledMoney, StyledTitle, StyledTopWrapper } from './DetailCard.style';
import makeAccountNumber from 'util/makeAccountNumber';
import getCompany from 'util/getCompany';

const DetailCard = (): JSX.Element => {
  const { onClickBring, customBringButtonStyle, number } = useDetailCard();
  
  return (
    <>
      <StyledTopWrapper>
        <StyledTitle>
          <div className="company">{getCompany(number as string)}</div>
          <div className="number">{makeAccountNumber(number as string)}</div>
        </StyledTitle>
        <StyledMoney>
          456,000
          <span className="won"> 원</span>
        </StyledMoney>
        <Button
          children="가져오기"
          customStyle={customBringButtonStyle}
          handleClick={onClickBring}
        />
      </StyledTopWrapper>
      <StyledHistoryOption>과거순</StyledHistoryOption>
      <StyledCardHistoryWrapper>
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
      </StyledCardHistoryWrapper>
    </>
  );
};

export default DetailCard;
