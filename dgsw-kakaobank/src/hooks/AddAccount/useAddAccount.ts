import useLink from 'hooks/Common/useLink';
import Toast from 'lib/Token';
import { ChangeEvent, CSSProperties, useMemo, useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { phoneState, setCardState } from 'store/addAccount';
import { ColorPalette } from 'styles/ColorPalette';
import makePhoneNumber from 'util/makePhoneNumber';
import addAccountValidation from 'validation/addAccount.validation';

const useAddAccount = () => {
  const { handleLink: pushNext } = useLink('/add/card');
  const { handleLink: pushMain } = useLink('/main');
  const [phone, setPhone] = useRecoilState<string>(phoneState);
  const [phoneError, setPhoneError] = useState<string>('');
  const [card, setCard] = useRecoilState<string[]>(setCardState);
  const resetCard = useResetRecoilState(setCardState);

  const onResetPhone = () => {
    setPhone('');
    setPhoneError('');
  };

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPhone(makePhoneNumber(e.target.value));
    checkPhone(e.target.value);
  };

  const customButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: ColorPalette.main,
      color: ColorPalette.fureBlack,
      marginTop: '65px',
    };
  }, []);

  const checkPhone = (value: string) => {
    if (value.length < 13) {
      setPhoneError('전화번호를 제대로 입력해주세요');
    } else {
      setPhoneError('');
    }
  };

  const onClickFind = () => {
    if (addAccountValidation.checkEmpty(phone)) {
      sessionStorage.setItem('AddCard', 'setCard');
      pushNext();
    }
  };

  const checkGetInfo = () => {
    if (sessionStorage.getItem('AddCard') !== 'getInfo') {
      Toast.errorToast('비정상적인 접근입니다.');
      pushMain();
    }
  };

  const checkSetCard = () => {
    if (sessionStorage.getItem('AddCard') !== 'setCard') {
      Toast.errorToast('비정상적인 접근입니다.');
      pushMain();
    }
  };

  const onClickSetCard = () => {
    if (card.length > 0) {
      Toast.successToast(`${card.length}개의 카드를 등록했습니다.`);
      sessionStorage.removeItem('AddCard');
      pushMain();
    } else {
      Toast.infoToast(`카드를 선택해주세요!`);
    }
  };

  const setCardCheck = ({
    value,
    number,
  }: {
    value: boolean;
    number: string;
  }) => {
    if (value) {
      setCard((prev) => [...prev, number]);
    } else {
      setCard(card.filter((v) => v !== number));
    }
  };

  return {
    phoneError,
    onClickSetCard,
    onChangePhone,
    phone,
    onClickFind,
    customButtonStyle,
    checkGetInfo,
    resetCard,
    checkSetCard,
    setCardCheck,
    onResetPhone,
    setCard,
  };
};

export default useAddAccount;
