import Button from 'components/Common/Button';
import { CSSProperties } from 'react';
import {
  StyledButton,
  StyledMoney,
  StyledTitle,
  StyledTopWrapper,
} from './DetailCard.style';

const DetailCard = (): JSX.Element => {
  const customRemittanceButtonStyle: CSSProperties = {
    width: '190px',
    height: '66px',
    backgroundColor: '#FFDC00',
    color: '#000000',
  };
  const customDepositButtonStyle: CSSProperties = {
    width: '190px',
    height: '66px',
  };
  return (
    <StyledTopWrapper>
      <StyledTitle>
        <div className="company">토스</div>
        <div className="number">001-01-1234567</div>
      </StyledTitle>
      <StyledMoney>
        456,000
        <span className="won"> 원</span>
      </StyledMoney>
      <StyledButton>
        <Button children="송금" customStyle={customRemittanceButtonStyle} />
        <Button children="입금" customStyle={customDepositButtonStyle} />
      </StyledButton>
    </StyledTopWrapper>
  );
};

export default DetailCard;
