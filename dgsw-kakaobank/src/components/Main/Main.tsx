import Button from 'components/Common/Button';
import Card from 'components/Main/Card';
import { CSSProperties } from 'react';
import AddCard from './AddCard';
import { StyledButton, StyledMainTitle } from './Main.style';

const Main = () => {
  const customRemittanceButtonStyle: CSSProperties = {
    width: '210px',
    backgroundColor: '#FFDC00',
    height: '60px',
    color: '#000000',
  };
  const customDepositButtonStyle: CSSProperties = {
    width: '210px',
    height: '60px',
  };
  return (
    <div>
      <StyledMainTitle>
        <span>손민재</span>
        <button>계좌개설</button>
      </StyledMainTitle>
      <StyledButton>
        <Button children="송금" customStyle={customRemittanceButtonStyle} />
        <Button children="입금" customStyle={customDepositButtonStyle} />
      </StyledButton>
      <Card company="토스" number="001-01-1234567" money="123,123" />
      <Card company="토스" number="001-01-1234567" money="123,123" />
      <Card company="토스" number="001-01-1234567" money="123,123" />
      <Card company="토스" number="001-01-1234567" money="123,123" />
      <AddCard />
    </div>
  );
};

export default Main;
