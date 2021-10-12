import React from 'react';
import { StyledTitle } from './AddAccountSetCard.style';
import Card from './Card';

const AddAccountSetCard = (): JSX.Element => {
  return (
    <>
      <StyledTitle>
        <div>N개의 은행에서</div>
        <div>N개의 계좌번호를 찾았습니다</div>
      </StyledTitle>
      <Card company="토스" money="456,000" number="001-01-1234567" />
      <Card company="토스" money="456,000" number="001-01-1234567" />
      <Card company="토스" money="456,000" number="001-01-1234567" />
      <Card company="토스" money="456,000" number="001-01-1234567" />
    </>
  );
};

export default AddAccountSetCard;
