import { StyledFooter } from './Footer.style';
import { ReactComponent as UserButton } from 'assets/icon/userBtn.svg';
import { ReactComponent as ServiceButton } from 'assets/icon/squareBtn.svg';
import { ReactComponent as MainButton } from 'assets/icon/home.svg';

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <div className="buttonWrapper">
        <MainButton />
        <ServiceButton />
        <UserButton />
      </div>
    </StyledFooter>
  );
};

export default Footer;
