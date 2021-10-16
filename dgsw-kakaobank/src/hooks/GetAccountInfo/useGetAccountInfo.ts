import useLink from 'hooks/Common/useLink';
import { handleGetMyAccount } from 'lib/api/account/account.api';
import Toast from 'lib/Toast';
import { useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { cardState } from 'store/getAccountInfo';
import { IAccount } from 'types/account/account.type';
import { UGetAccountTitle } from 'types/common/common.type';
import { removeHyphen } from 'util/removeHyphen';

const useGetAccountInfo = (nextUrl: string) => {
  const { handleLink: pushMain } = useLink('/main');
  const { handleLink: pushNext } = useLink(nextUrl);

  const [card, setCard] = useRecoilState<string>(cardState);
  const resetCard = useResetRecoilState(cardState);
  const [cardList, setCardList] = useState<IAccount[]>();

  const onClickCard = (number: string) => {
    setCard(removeHyphen(number));
  };

  const checkStorage = (title: UGetAccountTitle) => {
    if (title === '송금하기') {
      if (sessionStorage.getItem('Remittance') !== 'getCard') {
        Toast.errorToast('비정상적인 접근입니다.');
        pushMain();
      }
    } else {
      if (sessionStorage.getItem('Bring') !== 'getCard') {
        Toast.errorToast('비정상적인 접근입니다.');
        pushMain();
      }
    }
  };

  const onClickNext = (title: UGetAccountTitle) => {
    if (card.length <= 0) {
      Toast.infoToast('카드를 선택해주세요');
    } else {
      if (title === '송금하기') {
        sessionStorage.setItem('Remittance', 'setCard');
      } else {
        sessionStorage.setItem('Bring', 'money');
      }
      pushNext();
    }
  };

  const getMyAccount = async () => {
    try {
      const { data } = await handleGetMyAccount();
      setCardList(data);
    } catch (e: any) {
      Toast.infoToast(e.response.data.message);
    }
  };

  return {
    onClickCard,
    resetCard,
    card,
    cardList,
    getMyAccount,
    onClickNext,
    checkStorage,
  };
};

export default useGetAccountInfo;
