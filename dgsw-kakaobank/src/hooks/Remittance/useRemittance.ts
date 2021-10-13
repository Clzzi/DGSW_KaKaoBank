import { useState } from 'react';

const useRemittance = () => {
  const [bank, setBank] = useState<string>();
  
  return {
    setBank,
    bank,
  };
};

export default useRemittance;
