import useLink from 'hooks/Common/useLink';
import Toast from 'lib/Toast';
import { UGetPassword } from 'store/common';

const useGetPassword = () => {
  const { handleLink: pushMain } = useLink('/main');

  const checkStorage = (type: UGetPassword) => {
    switch (type) {
      case '송금':
        if (sessionStorage.getItem('Remittance') !== 'password') {
          Toast.errorToast('비정삭적인 접근입니다.');
          pushMain();
        }
        break;
      case '입금':
        if (sessionStorage.getItem('Deposit') !== 'password') {
          Toast.errorToast('비정삭적인 접근입니다.');
          pushMain();
        }
        break;
      default:
        if (sessionStorage.getItem('Bring') !== 'password') {
          Toast.errorToast('비정삭적인 접근입니다.');
          pushMain();
        }
        break;
    }
  };
  return {
    checkStorage,
  };
};

export default useGetPassword;
