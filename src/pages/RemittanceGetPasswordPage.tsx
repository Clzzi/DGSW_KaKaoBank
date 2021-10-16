import PageTemplate from 'components/Common/Base/PageTemplate';
import GetPassword from 'components/GetPassword';
import useRemittancePassword from 'hooks/Remittance/useRemittancePassword';

const RemittanceGetPasswordPage = (): JSX.Element => {
  const { onChangePassword, passwordError, onClickNext } =
    useRemittancePassword();
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <GetPassword
        title="계좌비밀번호 입력"
        type="송금"
        onClick={onClickNext}
        error={passwordError}
        onChange={onChangePassword}
      />
    </PageTemplate>
  );
};

export default RemittanceGetPasswordPage;
