import useLink from 'hooks/Common/useLink';
import Toast from 'lib/Toast';
import { UGetPassword } from 'types/common/common.type';

const useComplete = () => {
  const { handleLink: pushMain } = useLink('/main');

  const checkStorage = (type: UGetPassword) => {
    if (type === '송금') {
      if (sessionStorage.getItem('Remittance') !== 'complete') {
        Toast.errorToast('비정상적인 접근입니다');
        pushMain();
      }
    } else {
      if (sessionStorage.getItem('Bring') !== 'complete') {
        Toast.errorToast('비정상적인 접근입니다');
        pushMain();
      }
    }
  };

  return {
    checkStorage,
  };
};

export default useComplete;
