import React from 'react';
import Bank from './Bank';
import { StyledTitle } from './RemittanceSetCard.style';

const RemittanceSetCard = (): JSX.Element => {
  return (
    <>
      <StyledTitle>송금하기</StyledTitle>
      <Bank />
    </>
  );
};

export default RemittanceSetCard;
