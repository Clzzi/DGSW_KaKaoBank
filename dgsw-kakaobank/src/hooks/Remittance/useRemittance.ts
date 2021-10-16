import {
  ChangeEvent,
  CSSProperties,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Toast from 'lib/Toast';
import { fontPalette } from 'styles/FontPalette';
import useLink from 'hooks/Common/useLink';
import makeAccountNumber from 'util/makeAccountNumber';

const useRemittance = () => {
  const [account, setAccount] = useState<string>('');
  const [money, setMoney] = useState<string>('1');
  const [accountError, setAccountError] = useState<string>('');
  const [moneyError, setMoneyError] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const { handleLink: pushMain } = useLink('/main');
  const { handleLink: pushNext } = useLink('/remittance/confirm');
  const { handleLink: pushComplete } = useLink('/remittance/complete');
  const { handleLink: pushPassword } = useLink('/remittance/password');

  const customTitleInputStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: 'AppleM',
      fontSize: '20px',
      marginBottom: '20px',
    };
  }, []);

  const customInputStyle: CSSProperties = useMemo(() => {
    return {
      width: '100%',
      height: '80px',
      fontSize: fontPalette.font28,
      padding: '20px',
    };
  }, []);

  const checkStorage = () => {
    if (sessionStorage.getItem('Remittance') !== 'setCard') {
      Toast.errorToast('비정삭적인 접근입니다');
      pushMain();
    }
  };

  const onClickConfirmYes = () => {
    sessionStorage.setItem('Remittance', 'password');
    pushPassword();
  };

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

  const onChangeMoney = (e: ChangeEvent<HTMLInputElement>) => {
    setMoney(e.target.value.replace(/[^0-9]/g, ''));
    checkMoneyError(e.target.value.replace(/[^0-9]/g, ''));
  };

  const onChangeAccountNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setAccount(makeAccountNumber(e.target.value));
    checkAccountError(makeAccountNumber(e.target.value));
  };

  const checkAccountError = (value: string) => {
    if (value.length < 14) {
      setAccountError('계좌번호를 제대로 작성해주세요');
    } else {
      setAccountError('');
    }
  };

  const checkMoneyError = (value: string) => {
    if (value.length <= 0) {
      setMoneyError('금액을 제대로 입력해주세요');
    } else {
      setMoneyError('');
    }
  };

  const onClickNext = () => {
    if (
      accountError === '' &&
      moneyError === '' &&
      account.length === 14 &&
      money.length > 0
    ) {
      setOpenModal(true);
    } else {
      Toast.errorToast('제대로 입력해주셍요');
    }
  };

  const onClickModalYes = () => {
    sessionStorage.setItem('Remittance', 'confirm');
    setOpenModal(false);
    pushNext();
  };

  const onClickNextAuth = () => {
    if (password.length === 6 && passwordError === '') {
      sessionStorage.setItem('Remittance', 'complete');
      pushComplete();
    }
  };

  const onClickComplete = () => {
    sessionStorage.removeItem('Remittance');
    pushMain();
  };

  return {
    onClickComplete,
    onClickModalYes,
    openModal,
    setOpenModal,
    customInputStyle,
    customTitleInputStyle,
    account,
    money,
    onClickNext,
    onClickNextAuth,
    moneyError,
    onChangeAccountNumber,
    onChangeMoney,
    accountError,
    onClickConfirmYes,
    checkStorage,
    onChangePassword,
    passwordError,
  };
};

export default useRemittance;
