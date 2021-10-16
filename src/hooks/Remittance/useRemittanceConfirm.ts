import useQueryString from 'hooks/Common/useQueryString';
import { useHistory } from 'react-router';
import { History } from 'history';

const useRemittanceConfirm = () => {
  const history: History = useHistory();
  const { push } = useQueryString();
  const { receive } = useQueryString();
  const { money } = useQueryString();

  const onClickConfirmYes = () => {
    sessionStorage.setItem('Remittance', 'password');
    history.push(
      `/remittance/password?push=${push}&receive=${receive}&money=${money}`,
    );
  };

  return {
    push,
    receive,
    money,
    onClickConfirmYes,
  };
};

export default useRemittanceConfirm;
