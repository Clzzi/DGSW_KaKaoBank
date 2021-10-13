import useLink from 'hooks/Common/useLink';
import Toast from 'lib/Toast';
import { UGetPassword } from 'types/common/common.type';

const useComplete = () => {
  const { handleLink: pushMain } = useLink('/main');

  const checkStorage = (type: UGetPassword) => {
    switch (type) {
      case '송금':
        if (sessionStorage.getItem('Remittance') !== 'complete') {
          Toast.errorToast('비정상적인 접근입니다');
          pushMain();
        }
        break;
      case '입금':
        if (sessionStorage.getItem('Deposit') !== 'complete') {
          Toast.errorToast('비정상적인 접근입니다');
          pushMain();
        }
        break;
      default:
        if (sessionStorage.getItem('Bring') !== 'complete') {
          Toast.errorToast('비정상적인 접근입니다');
          pushMain();
        }
        break;
    }
  };
  return {
    checkStorage,
  };
};

export default useComplete;
