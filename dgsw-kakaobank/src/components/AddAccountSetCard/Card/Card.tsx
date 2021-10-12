import { useState } from 'react';
import { StyledCard } from './Card.style';
import { ReactComponent as Check } from 'assets/icon/check.svg';

interface ICardProps {
  company: string;
  number: string;
  money: string;
}

const Card = ({ money, company, number }: ICardProps): JSX.Element => {
  const [check, setCheck] = useState(false);
  const onClick = () => {
    setCheck((prev) => !prev);
  };
  return (
    <StyledCard onClick={onClick} check={check}>
      <div className="info">
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
