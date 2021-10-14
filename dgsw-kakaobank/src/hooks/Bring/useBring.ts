import useLink from 'hooks/Common/useLink';
import Toast from 'lib/Toast';
import { ChangeEvent, CSSProperties, useMemo, useState } from 'react';
import { fontPalette } from 'styles/FontPalette';

const useBring = () => {
  const [money, setMoney] = useState<string>('10000');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [moneyError, setMoneyError] = useState<string>('');

  const { handleLink: pushMain } = useLink('/main');
  const { handleLink: pushPassword } = useLink('/bring/password');
  const { handleLink: pushComplete } = useLink('/bring/complete');

  const onChangePassword = (value: string) => {
    setPassword(value);
    checkPasswordError(value);
  };

  const checkPasswordError = (value: string) => {
    if (value.length < 6) {
      setPasswordError('비밀번호를 제대로 입력해주세요');
    } else {
      setPasswordError('');
    }
  };

  const onClickNextAuth = () => {
    if (password.length === 6 && passwordError === '') {
      sessionStorage.setItem('Bring', 'complete');
      pushComplete();
    }
  };

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
    sessionStorage.setItem('Bring', 'password');
    pushPassword();
  };

  const onClickNext = () => {
    if (money.length > 0 && moneyError === '') {
      setOpenModal(true);
    } else {
      Toast.infoToast('금액을 입력해주세요');
    }
  };

  const onClickComplete = () => {
    sessionStorage.removeItem('Bring');
    pushMain();
  };

  return {
    money,
    onClickNext,
    customInputStyle,
    checkStorage,
    onClickNextAuth,
    onChangePassword,
    passwordError,
    openModal,
    onChangeMoney,
    setOpenModal,
    onClickModalYes,
    moneyError,
    onClickComplete,
  };
};

export default useBring;
