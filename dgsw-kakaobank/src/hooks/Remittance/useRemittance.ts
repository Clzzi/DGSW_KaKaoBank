import { ChangeEvent, CSSProperties, useMemo, useState } from 'react';
import { fontPalette } from 'styles/FontPalette';
import makeAccountNumber from 'util/makeAccountNumber';

const useRemittance = () => {
  const [bank, setBank] = useState<string>();
  const [account, setAccount] = useState<string>('');
  const [money, setMoney] = useState<string>('10000');
  const [accountError, setAccountError] = useState<string>('');
  const [moneyError, setMoneyError] = useState<string>('');

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

  return {
    setBank,
    bank,
    customInputStyle,
    customTitleInputStyle,
    account,
    money,
    moneyError,
    onChangeAccountNumber,
    onChangeMoney,
    accountError,
  };
};

export default useRemittance;
