import PageTemplate from 'components/Common/Base/PageTemplate';
import GetPassword from 'components/GetPassword';
import useDeposit from 'hooks/Deposit/useDeposit';

const DepositGetPasswordPage = (): JSX.Element => {
  const { onChangePassword, passwordError, onClickNextAuth } = useDeposit();
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <GetPassword
        title="계좌비밀번호 입력"
        type="입금"
        onClick={onClickNextAuth}
        error={passwordError}
        onChange={onChangePassword}
      />
    </PageTemplate>
  );
};

export default DepositGetPasswordPage;
