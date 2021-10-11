import { StyledFooter } from './Footer.style';
import { ReactComponent as UserButton } from 'assets/icon/userBtn.svg';
import { ReactComponent as ServiceButton } from 'assets/icon/squareBtn.svg';
import { ReactComponent as MainButton } from 'assets/icon/home.svg';
import usePathParams from 'hooks/Common/usePathParam';
import useLink from 'hooks/Common/useLink';

const Footer = (): JSX.Element => {
  const pathParam = usePathParams();
  const { handleLink: pushMain } = useLink('/main');
  const { handleLink: pushProfile } = useLink('/profile');
  const { handleLink: pushService } = useLink('/service');

  const FooterButton = (pathParam: string) => {
    switch (pathParam) {
      case '/main':
        return (
          <div className="buttonWrapper">
            <MainButton fill="#111962" cursor="pointer" onClick={pushMain} />
            {/* <ServiceButton cursor="pointer" onClick={pushService} /> */}
            <UserButton cursor="pointer" onClick={pushProfile} />
          </div>
        );
      case '/service':
        return (
          <div className="buttonWrapper">
            <MainButton cursor="pointer" onClick={pushMain} />
            {/* <ServiceButton
              fill="#111962"
              cursor="pointer"
              onClick={pushService}
            /> */}
            <UserButton cursor="pointer" onClick={pushProfile} />
          </div>
        );

      case '/profile':
        return (
          <div className="buttonWrapper">
            <MainButton cursor="pointer" onClick={pushMain} />
            {/* <ServiceButton cursor="pointer" onClick={pushService} /> */}
            <UserButton fill="#111962" cursor="pointer" onClick={pushProfile} />
          </div>
        );
    }
  };
  return <StyledFooter>{FooterButton(pathParam)}</StyledFooter>;
};

export default Footer;
