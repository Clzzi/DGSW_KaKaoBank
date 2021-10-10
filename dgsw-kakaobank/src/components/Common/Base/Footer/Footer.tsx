import { StyledFooter } from './Footer.style';
import { ReactComponent as UserButton } from 'assets/icon/userBtn.svg';
import { ReactComponent as ServiceButton } from 'assets/icon/squareBtn.svg';
import { ReactComponent as MainButton } from 'assets/icon/home.svg';
import usePathParams from 'hooks/Common/usePathParam';

const Footer = (): JSX.Element => {
  const pathParam = usePathParams();

  const FooterButton = (pathParam: string) => {
    switch (pathParam) {
      case '/main':
        return (
          <div className="buttonWrapper">
            <MainButton fill="#111962" cursor="pointer" />
            <ServiceButton cursor="pointer" />
            <UserButton cursor="pointer" />
          </div>
        );
      case '/service':
        return (
          <div className="buttonWrapper">
            <MainButton cursor="pointer" />
            <ServiceButton fill="#111962" cursor="pointer" />
            <UserButton cursor="pointer" />
          </div>
        );

      case '/profile':
        return (
          <div className="buttonWrapper">
            <MainButton cursor="pointer" />
            <ServiceButton cursor="pointer" />
            <UserButton fill="#111962" cursor="pointer" />
          </div>
        );
    }
  };
  return <StyledFooter>{FooterButton(pathParam)}</StyledFooter>;
};

export default Footer;
