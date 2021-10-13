import { ChangeEvent, CSSProperties, useMemo, useState } from 'react';
import { fontPalette } from 'styles/FontPalette';

const useRemittance = () => {
  const [bank, setBank] = useState<string>();
  const [account, setAccount] = useState<string>('');
  const [money, setMoney] = useState<string>('10000');
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
    setMoney(e.target.value);
    checkMoneyError(e.target.value);
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
    setAccount,
    account,
    money,
    moneyError,
    onChangeMoney,
  };
};

export default useRemittance;
