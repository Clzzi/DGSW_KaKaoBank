import React, { useEffect } from 'react';
import Form from 'components/Common/Form';
import Bank from './Bank';
import { StyledButton, StyledTitle } from './RemittanceSetCard.style';
import useRemittance from 'hooks/Remittance/useRemittance';
import AccountForm from 'components/Common/AccountForm';
import ModalPortal from 'components/Common/Modal/Portal';
import Modal from 'components/Common/Modal/Modal';

const RemittanceSetCard = (): JSX.Element => {
  const {
    onChangeMoney,
    moneyError,
    account,
    customTitleInputStyle,
    checkStorage,
    money,
    onChangeAccountNumber,
    customInputStyle,
    accountError,
    onClickNext,
    onClickModalYes,
    openModal,
    setOpenModal,
  } = useRemittance();

  useEffect(() => {
    checkStorage();
  }, []);

  return (
    <>
      <StyledTitle>송금하기</StyledTitle>
      <Bank />
      <Form
        title="계좌번호 입력"
        placeholder="계좌번호를 입력해주세요"
        name="account"
        maxLength={14}
        error={accountError}
        onChange={onChangeAccountNumber}
        value={account}
        customInputStyle={{ marginBottom: '8px' }}
        customTitleInputStyle={customTitleInputStyle}
      />
      <AccountForm
        title="금액 입력"
        value={money}
        name="account"
        error={moneyError}
        onChange={onChangeMoney}
        placeholder="금액을 입력해주세요"
        maxLength={10}
        balance="450,000"
        customInputStyle={customInputStyle}
      />
      <StyledButton onClick={onClickNext}>다음</StyledButton>
      {openModal && (
        <ModalPortal>
          <Modal
            title="신한은행"
            content="신중빈님에게 송금하시겠습니까?"
            handleNo={() => {
              setOpenModal(false);
            }}
            handleYes={onClickModalYes}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default RemittanceSetCard;
