import Button from 'components/Common/Button';
import { CSSProperties } from 'react';
import { fontPalette } from 'styles/FontPalette';
import { StyleHeader } from './Header.style';

const Header = ({ isLogout }: { isLogout: boolean }) => {
  const customButtonyStyle: CSSProperties = {
    width: '100px',
    height: '40px',
    fontSize: `${fontPalette.font16}`,
    fontFamily: "AppleB"
  };
  return (
    <StyleHeader>
      <div className="title">
        <div className="mainTitle">카카오뱅크</div>
        <div className="subTitle">in DGSW</div>
      </div>
      {isLogout && <Button customStyle={customButtonyStyle}>로그아웃</Button>}
    </StyleHeader>
  );
};

export default Header;
