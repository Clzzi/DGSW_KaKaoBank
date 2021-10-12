import useMain from 'hooks/Main/useMain';
import { StyledCard } from './Card.style';

interface ICardProps {
  company: string;
  number: string;
  money: string;
}

const Card = ({ company, number, money }: ICardProps) => {
  const { pushDetailCard } = useMain();
  return (
    <StyledCard onClick={pushDetailCard}>
      <div className="title">
        <div className="company">{company}</div>
        <div className="number">{number}</div>
      </div>
      <span className="money">{money}</span>
      <span className="won"> 원</span>
    </StyledCard>
  );
};

export default Card;
