import {
  StyledStartNow,
  StyledTitle,
  StyledTopBackground,
  StyledTopHeader,
} from './Welcome.style';
import RyanGIF from 'assets/Image/RyanGIF.gif';
import Button from 'components/Common/Button';
import { StyledButton } from 'components/Welcome/Welcome.style';
import useWelcome from 'hooks/Welcome/useWelcome';

const Welcome = () => {
  const { pushRegister, pushLogin, customButtonStyle } = useWelcome();
  return (
    <div>
      <StyledTopBackground>
        <StyledTopHeader>
          <div className="title">
            <div className="mainTitle">카카오뱅크</div>
            <div className="subTitle">in DGSW</div>
          </div>
        </StyledTopHeader>
        <StyledTitle>
          <span className="subTitle">대소고와 함께하는</span>
          <span className="mainTitle">카카오뱅크</span>
        </StyledTitle>
        <img src={RyanGIF} alt="Welcome GIF" />
      </StyledTopBackground>
      <StyledStartNow>
        <span className="highlighting">지금</span>
        시작해 보세요
      </StyledStartNow>
      <StyledButton>
        <Button
          children="로그인"
          handleClick={pushLogin}
          customStyle={customButtonStyle}
        />
        <Button children="회원가입" handleClick={pushRegister} />
      </StyledButton>
    </div>
  );
};

export default Welcome;
