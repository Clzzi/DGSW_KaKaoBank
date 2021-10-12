import useLink from 'hooks/Common/useLink';
import { CSSProperties, useMemo } from 'react';

const useMain = () => {
  const { handleLink: pushDetailCard } = useLink('/detailcard');
  const { handleLink: pushAddCard } = useLink('/getInfo');
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

  return {
    customDepositButtonStyle,
    customRemittanceButtonStyle,
    pushDetailCard,
    onClickAddCard,
  };
};

export default useMain;
