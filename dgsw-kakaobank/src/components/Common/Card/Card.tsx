import { StyledCard } from './Card.style';
import { useEffect, useState } from 'react';
import { ReactComponent as Check } from 'assets/icon/check.svg';

interface ICardProps {
  company: string;
  number: string;
  money: string;
  handleClick: ({ check, number }: { check: boolean; number: string }) => void;
}

const Card = ({
  company,
  money,
  number,
  handleClick,
}: ICardProps): JSX.Element => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    handleClick({ check, number });
  }, [check]);

  return (
    <StyledCard
      onClick={() => {
        setCheck((prev) => !prev);
      }}
      check={check}
    >
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
