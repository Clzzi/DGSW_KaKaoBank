import { useEffect, useState } from 'react';
import { StyledCard } from './Card.style';
import { ReactComponent as Check } from 'assets/icon/check.svg';
import useAddAccount from 'hooks/AddAccount/useAddAccount';

interface ICardProps {
  company: string;
  number: string;
  money: string;
}

const Card = ({ money, company, number }: ICardProps): JSX.Element => {
  const { setCardCheck } = useAddAccount();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCardCheck({ value: check, number });
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
