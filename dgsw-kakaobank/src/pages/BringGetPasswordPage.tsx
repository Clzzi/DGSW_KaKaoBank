import PageTemplate from 'components/Common/Base/PageTemplate';
import GetPassword from 'components/GetPassword';
import useBring from 'hooks/Bring/useBring';

const BringGetPasswordPage = (): JSX.Element => {
  const { onChangePassword, passwordError, onClickNextAuth } = useBring();
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <GetPassword
        title="계좌비밀번호 입력"
        type="가져오기"
        onClick={onClickNextAuth}
        error={passwordError}
        onChange={onChangePassword}
      />
    </PageTemplate>
  );
};

export default BringGetPasswordPage;
