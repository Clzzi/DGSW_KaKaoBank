import { handleGetMyInfo } from 'lib/api/user/user.api';
import Toast from 'lib/Toast';
import Token from 'lib/Token';
import { CSSProperties, useMemo } from 'react';
import { useSetRecoilState } from 'recoil';
import { userInfoState } from 'store/user';
import { fontPalette } from 'styles/FontPalette';

const useHeader = () => {
  const setUserInfo = useSetRecoilState(userInfoState);

  const customButtonyStyle: CSSProperties = useMemo(() => {
    return {
      width: '100px',
      height: '36px',
      fontSize: `${fontPalette.font16}`,
      fontFamily: 'AppleB',
      fontWeight: 'normal',
      boxShadow: '2px 4px 5px rgba(0, 0, 0, 0.25)',
    };
  }, []);

  const logout = () => {
    sessionStorage.removeItem('access-token');
    sessionStorage.removeItem('refresh-token');
    window.location.reload();
  };

  const getMyInfo = async () => {
    try {
      const { data } = await handleGetMyInfo();
      setUserInfo(data);
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  };

  const loadMyInfo = () => {
    if (checkToken()) {
      getMyInfo();
    } else {
      logout();
    }
  };

  const checkToken = () => {
    if (Token.getToken('refresh-token', 'session')) {
      return true;
    } else {
      return false;
    }
  };

  return {
    customButtonyStyle,
    loadMyInfo,
    logout,
  };
};

export default useHeader;
