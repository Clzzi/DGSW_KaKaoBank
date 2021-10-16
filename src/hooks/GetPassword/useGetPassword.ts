import useLink from 'hooks/Common/useLink';
import Toast from 'lib/Toast';
import { UGetPassword } from 'types/common/common.type';

const useGetPassword = () => {
  const { handleLink: pushMain } = useLink('/main');

  const checkStorage = (type: UGetPassword) => {
    if (type === '송금') {
      if (sessionStorage.getItem('Remittance') !== 'password') {
        Toast.errorToast('비정삭적인 접근입니다.');
        pushMain();
      }
    } else {
      if (sessionStorage.getItem('Bring') !== 'password') {
        Toast.errorToast('비정삭적인 접근입니다.');
        pushMain();
      }
    }
  };
  return {
    checkStorage,
  };
};

export default useGetPassword;
