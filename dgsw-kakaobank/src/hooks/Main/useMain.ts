import useLink from 'hooks/Common/useLink';
import useTheme from 'hooks/Theme/useTheme';
import { handleGetMyAccount } from 'lib/api/account/account.api';
import Toast from 'lib/Toast';
import { CSSProperties, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { myCardState } from 'store/account';
import { userInfoState } from 'store/user';
import { ColorPalette } from 'styles/ColorPalette';

const useMain = () => {
  const userInfo = useRecoilValue(userInfoState);
  const [myCard, setMyCard] = useRecoilState(myCardState);
  const { handleLink: pushAddCard } = useLink('/add/info');
  const { handleLink: pushEstablish } = useLink('/establish/password');
  const { handleLink: pushRemittance } = useLink('/remittance/getcard');
  const { handleChangeTheme, currentTheme } = useTheme();

  const customButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: '210px',
      backgroundColor: ColorPalette.main,
      height: '60px',
      color: '#000000',
      boxShadow: '2px 4px 5px rgba(0, 0, 0, 0.25)',
    };
  }, []);

  const darkThemeButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: "210px",
      height: "60px",
    }
  },[]);

  const getMyAccount = async () => {
    try {
      const { data } = await handleGetMyAccount();
      setMyCard(data);
    } catch (e: any) {
      Toast.infoToast(e.response.data.message);
    }
  };

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

  const resetStorage = () => {
    sessionStorage.removeItem('AddCard');
    sessionStorage.removeItem('Remittance');
    sessionStorage.removeItem('EstablishCard');
    sessionStorage.removeItem('Bring');
  };

  return {
    customButtonStyle,
    resetStorage,
    onClickAddCard,
    getMyAccount,
    onClickRemittance,
    onClickEstablish,
    handleChangeTheme,
    currentTheme,
    darkThemeButtonStyle,
    myCard,
    userInfo,
  };
};

export default useMain;
