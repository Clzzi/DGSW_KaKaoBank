import Button from 'components/Common/Button';
import useLink from 'hooks/Common/useLink';
import useHeader from 'hooks/Header/useHeader';
import { useEffect } from 'react';
import { StyleHeader } from './Header.style';

const Header = ({
  isLogout,
  isLoadInfo,
  path,
}: {
  isLogout: boolean;
  isLoadInfo: boolean;
  path: string;
}) => {
  const { loadMyInfo, customButtonyStyle, logout } = useHeader();
  const { handleLink: pushPath } = useLink(path);
  useEffect(() => {
    if (isLoadInfo) {
      loadMyInfo();
    }
  }, [isLoadInfo]);

  return (
    <StyleHeader>
      <div className={'HeaderWrapper'} onClick={pushPath}>
        <div className="title">
          <div className="mainTitle">카카오뱅크</div>
          <div className="subTitle">in DGSW</div>
        </div>
        {isLogout && (
          <Button customStyle={customButtonyStyle} handleClick={logout}>
            로그아웃
          </Button>
        )}
      </div>
    </StyleHeader>
  );
};

export default Header;
