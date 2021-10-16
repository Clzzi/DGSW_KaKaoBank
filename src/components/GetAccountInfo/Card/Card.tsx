import { StyledCard } from './Card.style';
import { ReactComponent as Check } from 'assets/icon/check.svg';

interface ICardProps {
  company: string;
  money: string;
  number: string;
  check: boolean;
  handleClick: (number: string) => void;
}

const Card = ({
  check,
  money,
  number,
  handleClick,
  company,
}: ICardProps): JSX.Element => {
  return (
    <StyledCard onClick={() => handleClick(number)} check={check}>
      <div className="title">
        <div className="company">{company}</div>
        <div className="number">{number}</div>
      </div>
      <div className="money">
        {money}
        <span className="won"> 원</span>
      </div>
      <div className="checkBackground">
        <Check />
      </div>
    </StyledCard>
  );
};

export default Card;
