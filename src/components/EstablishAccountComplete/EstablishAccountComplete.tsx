import React, { useEffect } from 'react';
import Button from 'components/Common/Button';
import { StyledContent, StyledTitle } from './EstablishAccountComplete.style';
import useEstablishAccount from 'hooks/EstablishAccount/useEstablishAccount';
import JSConfetti from 'js-confetti';

const EstablishAccountComplete = (): JSX.Element => {
  const {
    customButtonStyle,
    checkCompleteStorage,
    onClickComplete,
    accountInfo,
    confetti,
  } = useEstablishAccount();

  useEffect(() => {
    confetti.current = new JSConfetti();
    checkCompleteStorage();
  }, [checkCompleteStorage, confetti]);

  return (
    <>
      <StyledTitle>
        <div className="title">{`${accountInfo.name}님 축하합니다!`}</div>
        <div className="subTitle">
          통장이 개설되었습니다. <br />
          이제 자유롭게 사용해보세요!
        </div>
      </StyledTitle>
      <StyledContent>
        <span className="property">계좌번호: </span>
        <span className="content">{`${accountInfo.accountId}`}</span>
      </StyledContent>
      <Button
        children="완료"
        customStyle={customButtonStyle}
        handleClick={onClickComplete}
      />
    </>
  );
};

export default EstablishAccountComplete;
