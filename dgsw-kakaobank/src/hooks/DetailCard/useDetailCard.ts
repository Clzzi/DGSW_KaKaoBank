import useLink from 'hooks/Common/useLink';
import { CSSProperties, useMemo } from 'react';

const useDetailCard = () => {
  const {handleLink: pushBring} = useLink("/bring/getcard");
  const customBringButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: '100%',
      height: '60px',
      zIndex: 9,
      marginBottom: '16px',
    };
  }, []);

  return {
    pushBring,
    customBringButtonStyle
  }
};

export default useDetailCard;
