import useLink from 'hooks/Common/useLink';
import useTheme from 'hooks/Theme/useTheme';
import { handleGetMyAccount } from 'lib/api/account/account.api';
import Toast from 'lib/Toast';
import { CSSProperties, useMemo } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { myAccountIdState, myCardState } from 'store/account';
import { userInfoState } from 'store/user';
import { ColorPalette } from 'styles/ColorPalette';
import { IAccount } from 'types/account/account.type';

const useMain = () => {
  const userInfo = useRecoilValue(userInfoState);
  const [myCard, setMyCard] = useRecoilState(myCardState);
  const setAccountId = useSetRecoilState(myAccountIdState);
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
      width: '210px',
      height: '60px',
    };
  }, []);

  const getMyAccount = async () => {
    try {
      const { data } = await handleGetMyAccount();
      setMyAccountId(data);
      setMyCard(data);
    } catch (e: any) {
      Toast.infoToast(e.response.data.message);
    }
  };

  const setMyAccountId = (accounts: IAccount[]) => {
    let accountArray: string[] = [];
    accounts.forEach((account) => {
      accountArray.push(account.accountId);
    });
    setAccountId(accountArray);
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
