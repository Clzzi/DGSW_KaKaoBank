import useLink from 'hooks/Common/useLink';
import Toast from 'lib/Toast';
import { ChangeEvent, CSSProperties, useMemo, useState } from 'react';
import { fontPalette } from 'styles/FontPalette';

const useBring = () => {
  const [money, setMoney] = useState<string>('10000');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [moneyError, setMoneyError] = useState<string>('');
  const { handleLink: pushPassword } = useLink('/deposit/password');

  const { handleLink: pushMain } = useLink('/main');

  const checkStorage = () => {
    if (sessionStorage.getItem('Bring') !== 'money') {
      Toast.errorToast('비정상적인 접근입니다');
      pushMain();
    }
  };

  const onChangeMoney = (e: ChangeEvent<HTMLInputElement>) => {
    setMoney(e.target.value.replace(/[^0-9]/g, ''));
    checkMoneyError(e.target.value.replace(/[^0-9]/g, ''));
  };

  const checkMoneyError = (value: string) => {
    if (value.length <= 0) {
      setMoneyError('금액을 제대로 입력해주세요');
    } else {
      setMoneyError('');
    }
  };

  const customInputStyle: CSSProperties = useMemo(() => {
    return {
      width: '100%',
      height: '80px',
      fontSize: fontPalette.font28,
      padding: '20px',
    };
  }, []);

  const onClickModalYes = () => {
    sessionStorage.setItem('Bring', 'confirm');
    pushPassword();
  };

  const onClickNext = () => {
    if (money.length > 0 && moneyError === '') {
      setOpenModal(true);
    } else {
      Toast.infoToast('금액을 입력해주세요');
    }
  };

  return {
    money,
    onClickNext,
    customInputStyle,
    checkStorage,
    openModal,
    onChangeMoney,
    setOpenModal,
    onClickModalYes,
    moneyError,
  };
};

export default useBring;
