import Button from 'components/Common/Button';
import useLink from 'hooks/Common/useLink';
import { StyledTitle } from './Notfound.style';

const Notfound = (): JSX.Element => {
  const { handleLink: pushMain } = useLink('/main');
  return (
    <StyledTitle>
      잘못된 접근입니다
      <br />
      메인으로 돌아가세요
      <Button
        children="돌아가기"
        handleClick={pushMain}
        customStyle={{ marginTop: '80px' }}
      />
    </StyledTitle>
  );
};

export default Notfound;
