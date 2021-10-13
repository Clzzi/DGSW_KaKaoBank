import React from 'react';
import Form from 'components/Common/Form';
import Bank from './Bank';
import { StyledTitle } from './RemittanceSetCard.style';
import useRemittance from 'hooks/Remittance/useRemittance';

const RemittanceSetCard = (): JSX.Element => {
  const { setAccount, account, customTitleInputStyle } = useRemittance();
  return (
    <>
      <StyledTitle>송금하기</StyledTitle>
      <Bank />
      <Form
        title="계좌번호 입력"
        placeholder="계좌번호를 입력해주세요"
        name="account"
        maxLength={14}
        error="계좌번호를 제대로 적어주세요"
        onChange={(e) => setAccount(e.target.value)}
        value={account}
        customInputStyle={{ marginBottom: '8px' }}
        customTitleInputStyle={customTitleInputStyle}
      />
    </>
  );
};

export default RemittanceSetCard;
