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
            handleClick={setCardCheck}
            number={makeAccountNumber(v.accountId)}
          />
        );
      })}
      {card.length === 0 && <div>등록할 계좌가 없습니다.</div>}
      <Button
        customStyle={customButtonStyle}
        children="등록하기"
        handleClick={onClickSetCard}
      />
    </>
  );
};

export default AddAccountSetCard;
