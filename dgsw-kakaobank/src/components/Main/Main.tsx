import Button from 'components/Common/Button';
import Card from 'components/Main/Card';
import useMain from 'hooks/Main/useMain';
import AddCard from './AddCard';
import { StyledButton, StyledMainTitle } from './Main.style';

const Main = () => {
  const {
    customDepositButtonStyle,
    onClickEstablish,
    customRemittanceButtonStyle,
  } = useMain();
  return (
    <div>
      <StyledMainTitle>
        <span>손민재</span>
        <button onClick={onClickEstablish}>계좌개설</button>
      </StyledMainTitle>
      <StyledButton>
        <Button children="송금" customStyle={customRemittanceButtonStyle} />
        <Button children="입금" customStyle={customDepositButtonStyle} />
      </StyledButton>
      <Card company="토스" number="001-01-1234567" money="123,123" />
      <Card company="토스" number="001-01-1234567" money="123,123" />
      <Card company="토스" number="001-01-1234567" money="123,123" />
      <AddCard />
    </div>
  );
};

export default Main;
