import React, { useEffect } from 'react';
import Button from 'components/Common/Button';
import { StyledTitle } from './AddAccountSetCard.style';
import Card from 'components/Common/Card';
import useAddAccount from 'hooks/AddAccount/useAddAccount';
import getCompany from 'util/getCompany';
import makeAccountNumber from 'util/makeAccountNumber';

const AddAccountSetCard = (): JSX.Element => {
  const {
    customButtonStyle,
    checkSetCard,
    onClickSetCard,
    setCardCheck,
    getMyAllAccount,
    card,
    selectCard,
  } = useAddAccount();

  useEffect(() => {
    checkSetCard();
  }, [checkSetCard]);

  useEffect(() => {
    getMyAllAccount();
  }, []);

  return (
    <>
      <StyledTitle>
        <div>계좌 선택</div>
      </StyledTitle>
      {card.map((v) => {
        return (
          <Card
            key={v.accountId}
            company={getCompany(v.accountId)}
            money="10"
            handleClick={setCardCheck}
            number={makeAccountNumber(v.accountId)}
          />
        );
      })}
      <Button
        customStyle={customButtonStyle}
        children="등록하기"
        handleClick={onClickSetCard}
      />
    </>
  );
};

export default AddAccountSetCard;
