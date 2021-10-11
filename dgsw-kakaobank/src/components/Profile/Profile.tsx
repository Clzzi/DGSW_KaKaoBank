import { StyledContent, StyledContentWrap, StyledTitle } from './Profile.style';

const Profile = (): JSX.Element => {
  return (
    <div>
      <StyledTitle>
        <div>내 정보</div>
        {/* <button>수정하기</button> */}
      </StyledTitle>
      <StyledContentWrap>
        <StyledContent>
          <div className="property">이름: </div>
          <div className="content">손민재</div>
        </StyledContent>
        <StyledContent>
          <div className="property">아이디: </div>
          <div className="content">jce1407</div>
        </StyledContent>
        <StyledContent>
          <div className="property">전화번호: </div>
          <div className="content">010-9088-2512</div>
        </StyledContent>
        <StyledContent>
          <div className="property">생년월일: </div>
          <div className="content">041109-3</div>
        </StyledContent>
      </StyledContentWrap>
    </div>
  );
};

export default Profile;
