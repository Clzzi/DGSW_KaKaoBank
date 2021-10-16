import { useHistory } from 'react-router';
import { History } from 'history';
import useQueryString from 'hooks/Common/useQueryString';
import { useState } from 'react';
import { handleRemittance } from 'lib/api/account/account.api';
import Toast from 'lib/Toast';

const useRemittancePassword = () => {
  const history: History = useHistory();
  const { push } = useQueryString();
  const { receive } = useQueryString();
  const { money } = useQueryString();

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const onChangePassword = (value: string) => {
    setPassword(value);
    checkPasswordError(value);
  };

  const checkPasswordError = (value: string) => {
    if (value.length < 4) {
      setPasswordError('비밀번호를 제대로 입력해주세요');
    } else {
      setPasswordError('');
    }
  };

  const remittance = async () => {
    try {
      const req = {
        sendAccountId: push as string,
        sendAccountPw: password as string,
        receiveAccountId: receive as string,
        money: parseInt(money as string),
      };
      await handleRemittance(req);
      sessionStorage.setItem('Remittance', 'complete');
      history.push(
        `/remittance/complete?push=${push}&receive=${receive}&money=${money}`,
      );
    } catch (e: any) {
      Toast.errorToast(e.response.data.message);
    }
  };

  const onClickNext = () => {
    if (password.length !== 4 || passwordError !== '') {
      Toast.infoToast('비밀번호를 제대로 적어주세요');
      return;
    }
    remittance();
  };

  return {
    onChangePassword,
    onClickNext,
    push,
    receive,
    money,
    passwordError,
  };
};

export default useRemittancePassword;
