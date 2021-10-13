import PageTemplate from 'components/Common/Base/PageTemplate';
import GetPassword from 'components/GetPassword';
import useRemittance from 'hooks/Remittance/useRemittance';

const RemittanceGetPasswordPage = (): JSX.Element => {
  const { onChangePassword, passwordError, onClickNextAuth } = useRemittance();
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <GetPassword
        title="계좌비밀번호 입력"
        type="송금"
        onClick={onClickNextAuth}
        error={passwordError}
        onChange={onChangePassword}
      />
    </PageTemplate>
  );
};

export default RemittanceGetPasswordPage;
