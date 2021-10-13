import React, { useEffect } from 'react';
import { StyledButton, StyledTitle } from './GetAccountInfo.style';
import Card from 'components/Common/Card';
import useLink from 'hooks/Common/useLink';
import useGetAccountInfo from 'hooks/GetAccountInfo/useGetAccountInfo';

const GetAccountInfo = ({
  title,
  nextUrl,
}: {
  title: string;
  nextUrl: string;
}): JSX.Element => {
  const { handleLink: pushNext } = useLink(nextUrl);
  const { resetCard, onClickCard } = useGetAccountInfo();

  useEffect(() => {
    resetCard();
  }, []);

  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <Card
        company="토스"
        handleClick={onClickCard}
        money="456,000"
        number="001-01-1234567"
      />
      <Card
        company="카카오뱅크"
        handleClick={onClickCard}
        money="333,000"
        number="002-02-1234567"
      />
      <Card
        company="신한은행"
        handleClick={onClickCard}
        money="420,000"
        number="003-03-1234567"
      />
      <Card
        company="토스2"
        handleClick={onClickCard}
        money="123,000"
        number="004-04-1234567"
      />
      <StyledButton onClick={pushNext}>다음</StyledButton>
    </>
  );
};

export default GetAccountInfo;
