import {
  StyledCardHistoryWrapper,
  StyledHistoryOption,
} from './CardHistory/CardHistory.style';
import React from 'react';
import CardHistory from './CardHistory';
import Button from 'components/Common/Button';
import useDetailCard from 'hooks/DetailCard/useDetailCard';
import { StyledMoney, StyledTitle, StyledTopWrapper } from './DetailCard.style';

const DetailCard = (): JSX.Element => {
  const { pushBring, customBringButtonStyle } = useDetailCard();
  return (
    <>
      <StyledTopWrapper>
        <StyledTitle>
          <div className="company">토스</div>
          <div className="number">001-01-1234567</div>
        </StyledTitle>
        <StyledMoney>
          456,000
          <span className="won"> 원</span>
        </StyledMoney>
        <Button
          children="가져오기"
          customStyle={customBringButtonStyle}
          handleClick={pushBring}
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
