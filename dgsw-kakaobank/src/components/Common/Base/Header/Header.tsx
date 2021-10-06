import Button from 'components/Common/Button';
import { CSSProperties } from 'react';
import { fontPalette } from 'styles/FontPalette';
import { StyleHeader } from './Header.style';

const Header = ({ isLogout }: { isLogout: boolean }) => {
  const customButtonyStyle: CSSProperties = {
    width: '100px',
    height: '36px',
    fontSize: `${fontPalette.font16}`,
    fontFamily: 'AppleB',
    fontWeight: 'normal',
  };
  return (
    <StyleHeader>
      <div className={'HeaderWrapper'}>
        <div className="title">
          <div className="mainTitle">카카오뱅크</div>
          <div className="subTitle">in DGSW</div>
        </div>
        {isLogout && <Button customStyle={customButtonyStyle}>로그아웃</Button>}
      </div>
    </StyleHeader>
  );
};

export default Header;
