import { useRecoilState, useResetRecoilState } from 'recoil';
import { cardState } from 'store/getAccountInfo';

const useGetAccountInfo = () => {
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

  return {
    onClickCard,
    resetCard,
  };
};

export default useGetAccountInfo;
