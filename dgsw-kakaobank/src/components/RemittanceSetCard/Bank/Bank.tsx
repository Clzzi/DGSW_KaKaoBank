import React from 'react';
import { ReactComponent as Check } from 'assets/icon/check.svg';
import useRemittance from 'hooks/Remittance/useRemittance';
import { StlyedBankWrapper, StyledBank, StyledTitle } from './Bank.style';

const Bank = () => {
  const { setBank, bank } = useRemittance();
  return (
    <>
      <StyledTitle>은행 선택</StyledTitle>
      <StlyedBankWrapper>
        <StyledBank check={bank === '토스'} onClick={() => setBank('토스')}>
          토스
          <div className="background">
            <Check />
          </div>
        </StyledBank>
        <StyledBank check={bank === '신한'} onClick={() => setBank('신한')}>
          신한
          <div className="background">
            <Check />
          </div>
        </StyledBank>
        <StyledBank check={bank === '카카오'} onClick={() => setBank('카카오')}>
          카카오
          <div className="background">
            <Check />
          </div>
        </StyledBank>
        <StyledBank check={bank === '토스2'} onClick={() => setBank('토스2')}>
          토스2
          <div className="background">
            <Check />
          </div>
        </StyledBank>
      </StlyedBankWrapper>
    </>
  );
};

export default Bank;
