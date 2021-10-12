import { StyledCard } from './Card.style';

interface ICardProps {
  company: string;
  number: string;
  money: string;
}

const Card = ({ money, company, number }: ICardProps): JSX.Element => {
  return (
    <StyledCard>
      <div className="info">
        <div className="company">{company}</div>
        <div className="number">{number}</div>
      </div>
      <div className="money">
        {money}
        <span className="won"> 원</span>
      </div>
    </StyledCard>
  );
};

export default Card;
