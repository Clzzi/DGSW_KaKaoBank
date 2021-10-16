import useMain from 'hooks/Main/useMain';
import { StyledAddCard } from './AddCard.style';

const AddCard = () => {
  const { onClickAddCard } = useMain();
  return <StyledAddCard onClick={onClickAddCard}>+</StyledAddCard>;
};

export default AddCard;
