import useLink from 'hooks/Common/useLink';
import Toast from 'lib/Token';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { cardState } from 'store/getAccountInfo';
import { UGetAccountTitle } from 'types/getAccount/getAccount.type';

const useGetAccountInfo = () => {
  const { handleLink: pushMain } = useLink('/main');
  const [card, setCard] = useRecoilState<string[]>(cardState);
  const resetCard = useResetRecoilState(cardState);

  const onClickCard = ({
    check,
    number,
  }: {
    check: boolean;
    number: string;
  }) => {
    if (check) {
      setCard((prev) => [...prev, number]);
    } else {
      setCard(card.filter((v) => v !== number));
    }
  };

  const checkStorage = (title: UGetAccountTitle) => {
    switch (title) {
      case '송금하기':
        if (sessionStorage.getItem('Remittance') !== 'getInfo') {
          Toast.errorToast('비정상적인 접근입니다.');
          pushMain();
        }
        break;
      case '입금하기':
        if (sessionStorage.getItem('Deposit') !== 'getInfo') {
          Toast.errorToast('비정상적인 접근입니다.');
          pushMain();
        }
        break;
      case '은행선택':
        if (sessionStorage.getItem('Bring') !== 'getInfo') {
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

  return {
    onClickCard,
    resetCard,
    checkStorage,
  };
};

export default useGetAccountInfo;
