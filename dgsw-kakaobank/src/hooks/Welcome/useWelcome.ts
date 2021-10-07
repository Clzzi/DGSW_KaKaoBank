import useLink from 'hooks/Common/useLink';
import { CSSProperties, useMemo } from 'react';

const useWelcome = () => {
  const { handleLink: pushLogin } = useLink('/login');
  const { handleLink: pushRegister } = useLink('/register');
  console.log(pushLogin, pushRegister);

  const customButtonStyle: CSSProperties = useMemo(() => {
    return {
      marginBottom: '20px',
    };
  }, []);
  return {
    customButtonStyle,
    pushRegister,
    pushLogin,
  };
};

export default useWelcome;
