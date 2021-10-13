import { CSSProperties, useMemo, useState } from 'react';

const useRemittance = () => {
  const [bank, setBank] = useState<string>();
  const [account, setAccount] = useState<string>('');
  const customTitleInputStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: 'AppleM',
      fontSize: '20px',
      marginBottom: '20px',
    };
  }, []);
  
  return {
    setBank,
    bank,
    customTitleInputStyle,
    setAccount,
    account,
  };
};

export default useRemittance;
