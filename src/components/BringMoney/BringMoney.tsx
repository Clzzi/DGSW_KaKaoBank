import React, { useEffect } from 'react';
import { StyledButton, StyledTitle } from './BringMoney.style';
import AccountForm from 'components/Common/AccountForm';
import ModalPortal from 'components/Common/Modal/Portal';
import Modal from 'components/Common/Modal';
import useBring from 'hooks/Bring/useBring';

const BringMoney = (): JSX.Element => {
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
  } = useBring();

  useEffect(() => {
    checkStorage();
  }, [checkStorage]);

  return (
    <>
      <StyledTitle>가져오기</StyledTitle>
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
            content="가져오시겠습니까?"
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

export default BringMoney;
