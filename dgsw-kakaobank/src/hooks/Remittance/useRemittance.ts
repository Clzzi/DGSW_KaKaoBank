import { CSSProperties, useMemo, useState } from 'react';
import { fontPalette } from 'styles/FontPalette';

const useRemittance = () => {
  const [bank, setBank] = useState<string>();
  const [account, setAccount] = useState<string>('');
  const [money, setMoney] = useState<string>("0");
  const [korean, setKorean] = useState<string>("영");

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

  return {
    setBank,
    bank,
    customInputStyle,
    customTitleInputStyle,
    setAccount,
    account,
  };
};

export default useRemittance;
