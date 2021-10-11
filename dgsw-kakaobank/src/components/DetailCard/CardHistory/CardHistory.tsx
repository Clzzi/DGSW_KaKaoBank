import {
  StyledCardHistory,
  StyledInfo,
  StyledMoney,
} from './CardHistory.style';

const CardHistory = (): JSX.Element => {
  return (
    <StyledCardHistory>
      <StyledInfo>
        <div className="date">08.31</div>
        <div className="name">손민재</div>
      </StyledInfo>

      <StyledMoney>
        <div className="money">
          -19,000
          <span className="won"> 원</span>
        </div>

        <div className="balance">
          1,000
          <span className="won"> 원</span>
        </div>
      </StyledMoney>
    </StyledCardHistory>
  );
};

export default CardHistory;
