import { URecord } from 'types/common/common.type';
import makeDate from 'util/makeDate';
import {
  StyledCardHistory,
  StyledInfo,
  StyledMoney,
} from './CardHistory.style';

interface ICardHistoryProps {
  date: string;
  account: string;
  money: string;
  type: URecord;
}

const CardHistory = ({
  account,
  date,
  money,
  type,
}: ICardHistoryProps): JSX.Element => {
  return (
    <StyledCardHistory>
      <StyledInfo>
        <div className="date">{makeDate(date)}</div>
        <div className="account">{account}</div>
      </StyledInfo>

      <StyledMoney type={type}>
        {type === 'receive' ? money : `-${money}`}
        <span className="won"> 원</span>
      </StyledMoney>
    </StyledCardHistory>
  );
};

export default CardHistory;
