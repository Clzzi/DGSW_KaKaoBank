import React, { useEffect } from 'react';
import Form from 'components/Common/Form';
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
    onResetPhone,
    checkGetInfo,
  } = useAddAccount();

  useEffect(() => {
    checkGetInfo();
  }, [checkGetInfo]);

  useEffect(() => {
    onResetPhone();
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
        customInputStyle={{marginBottom: "8px"}}
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
