import { useRecoilValue } from 'recoil';
import { userInfoState } from 'store/user';
import makeBirth from 'util/makeBirth';
import makePhoneNumber from 'util/makePhoneNumber';
import { StyledContent, StyledContentWrap, StyledTitle } from './Profile.style';

const Profile = (): JSX.Element => {
  const userInfo = useRecoilValue(userInfoState);
  return (
    <div>
      <StyledTitle>
        <div>내 정보</div>
        {/* <button>수정하기</button> */}
      </StyledTitle>
      <StyledContentWrap>
        <StyledContent>
          <div className="property">이름: </div>
          <div className="content">{userInfo.name && userInfo.name}</div>
        </StyledContent>
        <StyledContent>
          <div className="property">아이디: </div>
          <div className="content">{userInfo.id && userInfo.id}</div>
        </StyledContent>
        <StyledContent>
          <div className="property">전화번호: </div>
          <div className="content">
            {userInfo.phone && makePhoneNumber(userInfo.phone)}
          </div>
        </StyledContent>
        <StyledContent>
          <div className="property">생년월일: </div>
          <div className="content">
            {userInfo.birth && makeBirth(userInfo.birth)}
          </div>
        </StyledContent>
      </StyledContentWrap>
    </div>
  );
};

export default Profile;
