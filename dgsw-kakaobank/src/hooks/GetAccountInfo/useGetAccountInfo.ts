import useLink from 'hooks/Common/useLink';
import Toast from 'lib/Toast';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { cardState } from 'store/getAccountInfo';
import { UGetAccountTitle } from 'types/common/common.type';

const useGetAccountInfo = (nextUrl: string) => {
  const { handleLink: pushMain } = useLink('/main');
  const { handleLink: pushNext } = useLink(nextUrl);
  const [card, setCard] = useRecoilState<string>(cardState);
  const resetCard = useResetRecoilState(cardState);

  const onClickCard = (number: string) => {
    setCard(number);
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

  return {
    onClickCard,
    resetCard,
    card,
    onClickNext,
    checkStorage,
  };
};

export default useGetAccountInfo;
