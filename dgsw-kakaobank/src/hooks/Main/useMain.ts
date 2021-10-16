import useLink from 'hooks/Common/useLink';
import { handleGetMyAccount } from 'lib/api/account/account.api';
import Toast from 'lib/Toast';
import { CSSProperties, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { myCardState } from 'store/account';
import { userInfoState } from 'store/user';

const useMain = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [myCard, setMyCard] = useRecoilState(myCardState);

  const { handleLink: pushAddCard } = useLink('/add/info');
  const { handleLink: pushEstablish } = useLink('/establish/password');
  const { handleLink: pushRemittance } = useLink('/remittance/getcard');

  const customButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: '#FFDC00',
      height: '60px',
      color: '#000000',
    };
  }, []);

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
    myCard,
    userInfo,
  };
};

export default useMain;
