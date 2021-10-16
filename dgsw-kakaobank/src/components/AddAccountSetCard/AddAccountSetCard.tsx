import React, { useEffect } from 'react';
import Button from 'components/Common/Button';
import { StyledTitle } from './AddAccountSetCard.style';
import Card from 'components/Common/Card';
import useAddAccount from 'hooks/AddAccount/useAddAccount';

const AddAccountSetCard = (): JSX.Element => {
  const {
    customButtonStyle,
    resetCard,
    checkSetCard,
    onClickSetCard,
    setCardCheck,
  } = useAddAccount();

  useEffect(() => {
    checkSetCard();
  }, [checkSetCard]);

  useEffect(() => {
    resetCard();
  }, [resetCard]);

  return (
    <>
      <StyledTitle>
        <div>N개의 은행에서</div>
        <div>N개의 계좌번호를 찾았습니다</div>
      </StyledTitle>
      <Card
        company="토스"
        money="456,000"
        handleClick={setCardCheck}
        number="001-01-1234567"
      />
      <Card
        company="카카오뱅크"
        money="333,000"
        handleClick={setCardCheck}
        number="002-02-1234567"
      />
      <Card
        company="신한은행"
        money="420,000"
        handleClick={setCardCheck}
        number="003-03-1234567"
      />
      <Card
        company="토스2"
        money="123,000"
        handleClick={setCardCheck}
        number="004-04-1234567"
      />
      <Button
        customStyle={customButtonStyle}
        children="등록하기"
        handleClick={onClickSetCard}
      />
    </>
  );
};

export default AddAccountSetCard;
