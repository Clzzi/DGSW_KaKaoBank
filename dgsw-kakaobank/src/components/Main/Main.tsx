import Button from 'components/Common/Button';
import Card from 'components/Main/Card';
import { ThemeEnum } from 'enum/ThemeEnum';
import useMain from 'hooks/Main/useMain';
import { useEffect } from 'react';
import { IAccount } from 'types/account/account.type';
import getCompany from 'util/getCompany';
import makeAccountNumber from 'util/makeAccountNumber';
import makeMoneyComma from 'util/makeMoneyComma';
import AddCard from './AddCard';
import { StyledButton, StyledMainTitle } from './Main.style';

const Main = () => {
  const {
    customButtonStyle,
    onClickEstablish,
    resetStorage,
    handleChangeTheme,
    currentTheme,
    onClickRemittance,
    myCard,
    getMyAccount,
    darkThemeButtonStyle,
    userInfo,
  } = useMain();

  useEffect(() => {
    resetStorage();
    getMyAccount();
  }, []);

  return (
    <div>
      <StyledMainTitle>
        <span>{userInfo && userInfo.name}</span>
        <button onClick={onClickEstablish}>계좌개설</button>
      </StyledMainTitle>
      <StyledButton>
        <Button
          children="송금"
          customStyle={customButtonStyle}
          handleClick={onClickRemittance}
        />
        <Button
          children={currentTheme === ThemeEnum.DARK ? '라이트모드' : '다크모드'}
          customStyle={
            currentTheme === ThemeEnum.DARK
              ? customButtonStyle
              : darkThemeButtonStyle
          }
          handleClick={handleChangeTheme}
        />
      </StyledButton>
      {myCard &&
        myCard.map((card: IAccount) => {
          return (
            <Card
              key={card.accountId}
              company={getCompany(card.accountId)}
              number={makeAccountNumber(card.accountId)}
              money={makeMoneyComma(card.money)}
            />
          );
        })}
      <AddCard />
    </div>
  );
};

export default Main;
