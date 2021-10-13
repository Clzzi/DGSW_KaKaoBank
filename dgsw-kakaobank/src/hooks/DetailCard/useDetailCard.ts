import useLink from 'hooks/Common/useLink';
import { CSSProperties, useMemo } from 'react';

const useDetailCard = () => {
  const { handleLink: pushBring } = useLink('/bring/getcard');
  const customBringButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: '100%',
      height: '60px',
      zIndex: 9,
      marginBottom: '16px',
    };
  }, []);

  const onClickBring = () => {
    sessionStorage.setItem('Bring', 'getCard');
    pushBring();
  };

  return {
    onClickBring,
    customBringButtonStyle,
  };
};

export default useDetailCard;
