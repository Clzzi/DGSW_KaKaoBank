import React, { useEffect } from 'react';
import { StyledButton, StyledTitle } from './DepositMoney.style';
import AccountForm from 'components/Common/AccountForm';
import useDeposit from 'hooks/Deposit/useDeposit';
import ModalPortal from 'components/Common/Modal/Portal';
import Modal from 'components/Common/Modal';

const DepositMoney = (): JSX.Element => {
  const {
    onChangeMoney,
    customInputStyle,
    money,
    onClickNext,
    moneyError,
    checkStorage,
    openModal,
    setOpenModal,
    onClickModalYes,
  } = useDeposit();

  useEffect(() => {
    checkStorage();
  }, []);

  return (
    <>
      <StyledTitle>입금하기</StyledTitle>
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
            content="입금하시겠습니까?"
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

export default DepositMoney;
