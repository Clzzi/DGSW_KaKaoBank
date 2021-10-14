import useLink from 'hooks/Common/useLink';
import Toast from 'lib/Toast';
import { useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { cardState } from 'store/getAccountInfo';
import { UGetAccountTitle } from 'types/common/common.type';

const useGetAccountInfo = (nextUrl: string) => {
  const { handleLink: pushMain } = useLink('/main');
  const { handleLink: pushNext } = useLink(nextUrl);
  const [card, setCard] = useRecoilState<string>(cardState);
  const resetCard = useResetRecoilState(cardState);

  useEffect(() => {
    console.log(card);
  }, [card]);

  const onClickCard = (number: string) => {
    setCard(number);
  };

  const checkStorage = (title: UGetAccountTitle) => {
    switch (title) {
      case '송금하기':
        if (sessionStorage.getItem('Remittance') !== 'getCard') {
          Toast.errorToast('비정상적인 접근입니다.');
          pushMain();
        }
        break;
      case '입금하기':
        if (sessionStorage.getItem('Deposit') !== 'getCard') {
          Toast.errorToast('비정상적인 접근입니다.');
          pushMain();
        }
        break;
      case '은행선택':
        if (sessionStorage.getItem('Bring') !== 'getCard') {
          Toast.errorToast('비정상적인 접근입니다.');
          pushMain();
        }
        break;
      default:
        Toast.errorToast('비정상적인 접근입니다.');
        pushMain();
        break;
    }
  };

  const onClickNext = (title: UGetAccountTitle) => {
    if (card.length <= 0) {
      Toast.infoToast('카드를 선택해주세요');
    } else {
      switch (title) {
        case '송금하기':
          sessionStorage.setItem('Remittance', 'setCard');
          break;
        case '입금하기':
          sessionStorage.setItem('Deposit', 'money');
          break;
        default:
          sessionStorage.setItem('Bring', 'money');
          break;
      }
      pushNext();
    }
  };

  return {
    onClickCard,
    resetCard,
    card,
    onClickNext,
    checkStorage,
  };
};

export default useGetAccountInfo;
