import useLink from 'hooks/Common/useLink';
import { handleGetMyAccount } from 'lib/api/account/account.api';
import Toast from 'lib/Toast';
import {  useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { cardState } from 'store/getAccountInfo';
import { IAccount } from 'types/account/account.type';
import { UGetAccountTitle } from 'types/common/common.type';
import { removeHyphen } from 'util/removeHyphen';
import { useHistory } from 'react-router';
import { History } from 'history';

const useGetAccountInfo = () => {
  const { handleLink: pushMain } = useLink('/main');
  const history: History = useHistory();
  const [card, setCard] = useRecoilState<string>(cardState);
  const [money, setMoney] = useState<string>('');
  const [cardList, setCardList] = useState<IAccount[]>();
  const resetCard = useResetRecoilState(cardState);

  const onClickCard = ({
    number,
    money,
  }: {
    number: string;
    money: string;
  }) => {
    setCard(removeHyphen(number));
    setMoney(money);
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
      return;
    }

    if (parseInt(money) <= 0) {
      Toast.infoToast('계좌에 돈이 없습니다.');
      return;
    }

    if (title === '송금하기') {
      sessionStorage.setItem('Remittance', 'setCard');
      history.push(`/remittance/setcard?number=${card}`);
    } else {
      sessionStorage.setItem('Bring', 'money');
      history.push(`/bring/money?number=${card}`);
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
    money,
    resetCard,
    card,
    cardList,
    getMyAccount,
    onClickNext,
    checkStorage,
  };
};

export default useGetAccountInfo;
