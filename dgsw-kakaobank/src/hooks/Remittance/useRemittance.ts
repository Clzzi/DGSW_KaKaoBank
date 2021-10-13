import useLink from 'hooks/Common/useLink';
import Toast from 'lib/Toast';
import {
  ChangeEvent,
  CSSProperties,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useRecoilState } from 'recoil';
import { bankState } from 'store/remittance';
import { fontPalette } from 'styles/FontPalette';
import makeAccountNumber from 'util/makeAccountNumber';

const useRemittance = () => {
  const [bank, setBank] = useRecoilState<string>(bankState);
  const [account, setAccount] = useState<string>('');
  const [money, setMoney] = useState<string>('10000');
  const [accountError, setAccountError] = useState<string>('');
  const [moneyError, setMoneyError] = useState<string>('');
  const { handleLink: pushMain } = useLink('/main');

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

  const onChangeMoney = (e: ChangeEvent<HTMLInputElement>) => {
    setMoney(e.target.value.replace(/[^0-9]/g, ''));
    checkMoneyError(e.target.value);
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
    console.log(bank);
    if (
      accountError === '' &&
      moneyError === '' &&
      bank !== '' &&
      account.length === 14 &&
      money.length > 0
    ) {
      Toast.infoToast('모달');
    } else {
      Toast.errorToast('제대로 입력해주셍요');
    }
  };

  return {
    setBank,
    bank,
    customInputStyle,
    customTitleInputStyle,
    account,
    money,
    onClickNext,
    moneyError,
    onChangeAccountNumber,
    onChangeMoney,
    accountError,
    checkStorage,
  };
};

export default useRemittance;
