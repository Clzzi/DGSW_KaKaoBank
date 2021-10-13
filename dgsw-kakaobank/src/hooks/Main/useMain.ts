import useLink from 'hooks/Common/useLink';
import { CSSProperties, useMemo } from 'react';

const useMain = () => {
  const { handleLink: pushDetailCard } = useLink('/detailcard');
  const { handleLink: pushAddCard } = useLink('/add/info');
  const { handleLink: pushEstablish } = useLink('/establish/password');
  const { handleLink: pushRemittance } = useLink('/remittance/getcard');
  const { handleLink: pushDeposit } = useLink('/deposit/getcard');

  const customRemittanceButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: '210px',
      backgroundColor: '#FFDC00',
      height: '60px',
      color: '#000000',
    };
  }, []);

  const customDepositButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: '210px',
      height: '60px',
    };
  }, []);

  const onClickAddCard = () => {
    sessionStorage.setItem('AddCard', 'getInfo');
    pushAddCard();
  };

  const onClickEstablish = () => {
    sessionStorage.setItem('EstablishCard', 'getPassword');
    pushEstablish();
  };

  const onClickRemittance = () => {
    sessionStorage.setItem('Remittance', 'getCard');
    pushRemittance();
  };

  const onClickDeposit = () => {
    sessionStorage.setItem('Deposit', 'getCard');
    pushDeposit();
  };

  const resetStorage = () => {
    sessionStorage.removeItem('AddCard');
    sessionStorage.removeItem('Remittance');
    sessionStorage.removeItem('EstablishCard');
    sessionStorage.removeItem('Deposit');
  };

  return {
    customDepositButtonStyle,
    customRemittanceButtonStyle,
    pushDetailCard,
    resetStorage,
    onClickDeposit,
    onClickAddCard,
    onClickRemittance,
    onClickEstablish,
  };
};

export default useMain;
