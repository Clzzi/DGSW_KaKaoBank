import useLink from 'hooks/Common/useLink';
import useQueryString from 'hooks/Common/useQueryString';

const useRemittanceComplete = () => {
  const { handleLink: pushMain } = useLink('/main');
  const { push } = useQueryString();
  const { receive } = useQueryString();
  const { money } = useQueryString();

  const onClickComplete = () => {
    sessionStorage.removeItem('Remittance');
    pushMain();
  };

  return {
    push,
    receive,
    money,
    onClickComplete,
  };
};
export default useRemittanceComplete;
