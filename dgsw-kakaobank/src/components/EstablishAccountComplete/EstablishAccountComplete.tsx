import React, { useEffect } from 'react';
import Button from 'components/Common/Button';
import { StyledContent, StyledTitle } from './EstablishAccountComplete.style';
import useEstablishAccount from 'hooks/EstablishAccount/useEstablishAccount';

const EstablishAccountComplete = (): JSX.Element => {
  const { customButtonStyle, popEmoji } = useEstablishAccount();

  useEffect(() => {
    popEmoji();
  }, [popEmoji]);

  return (
    <>
      <StyledTitle>
        <div className="title">축하합니다!</div>
        <div className="subTitle">
          입출금 통장이 개설되었습니다. <br />
          이제 자유롭게 사용해보세요!
        </div>
      </StyledTitle>
      <StyledContent>
        <span className="property">계좌종류: </span>
        <span className="content">자유입출금</span>
      </StyledContent>
      <StyledContent>
        <span className="property">이체한도: </span>
        <span className="content">1일 최대 300만원</span>
      </StyledContent>
      <Button children="완료" customStyle={customButtonStyle} />
    </>
  );
};

export default EstablishAccountComplete;
