import React, { useEffect } from 'react';
import Form from 'components/Register/Form';
import { StyledTitle } from './AddAccountGetInfo.style';
import useAddAccount from 'hooks/AddAccount/useAddAccount';
import Button from 'components/Common/Button';

const AddAccountGetInfo = (): JSX.Element => {
  const {
    phoneError,
    customButtonStyle,
    onChangePhone,
    onClickFind,
    phone,
    checkGetInfo,
  } = useAddAccount();

  useEffect(() => {
    checkGetInfo();
  }, []);

  return (
    <>
      <StyledTitle>
        <div>본인 및 계좌정보를 확인하기 위해</div>
        <div>전화번호를 입력해주세요</div>
      </StyledTitle>
      <Form
        title="전화번호"
        error={phoneError}
        value={phone}
        onChange={onChangePhone}
        name="phone"
        placeholder="전화번호를 입력해주세요 ex) 010-9088-2512"
        maxLength={13}
      />
      <Button
        children="조회하기"
        handleClick={onClickFind}
        customStyle={customButtonStyle}
      />
    </>
  );
};

export default AddAccountGetInfo;
