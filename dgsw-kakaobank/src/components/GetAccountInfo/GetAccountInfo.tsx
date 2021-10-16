import React, { useEffect } from 'react';
import Card from './Card';
import { StyledButton, StyledTitle } from './GetAccountInfo.style';
import useGetAccountInfo from 'hooks/GetAccountInfo/useGetAccountInfo';
import { UGetAccountTitle } from 'types/common/common.type';
import getCompany from 'util/getCompany';
import makeAccountNumber from 'util/makeAccountNumber';
import makeMoneyComma from 'util/makeMoneyComma';

const GetAccountInfo = ({
  title,
  nextUrl,
}: {
  title: UGetAccountTitle;
  nextUrl: string;
}): JSX.Element => {
  const {
    resetCard,
    checkStorage,
    onClickCard,
    getMyAccount,
    cardList,
    onClickNext,
    card,
  } = useGetAccountInfo(nextUrl);

  useEffect(() => {
    resetCard();
    checkStorage(title);
    getMyAccount();
  }, []);

  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      {cardList &&
        cardList.map((c) => {
          return (
            <Card
              key={c.accountId}
              company={getCompany(c.accountId)}
              handleClick={onClickCard}
              money={makeMoneyComma(c.money)}
              number={makeAccountNumber(c.accountId)}
              check={card === c.accountId}
            />
          );
        })}
      <StyledButton onClick={() => onClickNext(title)}>다음</StyledButton>
    </>
  );
};

export default GetAccountInfo;
