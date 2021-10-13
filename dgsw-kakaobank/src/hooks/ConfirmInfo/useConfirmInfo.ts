import useLink from 'hooks/Common/useLink';
import Toast from 'lib/Toast';
import { UConfirmInfo } from 'types/common/common.type';

const useConfirmInfo = () => {
  const { handleLink: pushMain } = useLink('/main');
  const { handleLink: pushNext } = useLink('/remittance/password');

  const onClickNo = () => {
    pushMain();
  };

  const onClickYes = () => {
    sessionStorage.setItem('Remittance', 'password');
    pushNext();
  };

  const checkStorage = (type: UConfirmInfo) => {
    switch (type) {
      case '송금':
        if (sessionStorage.getItem('Remittance') !== 'confirm') {
          Toast.errorToast('비정상적인 접근입니다');
          pushMain();
        }
        break;
      default:
        if (sessionStorage.getItem('Deposit') !== 'confirm') {
          Toast.errorToast('비정상적인 접근입니다');
          pushMain();
        }
        break;
    }
  };

  return {
    onClickNo,
    onClickYes,
    checkStorage,
  };
};

export default useConfirmInfo;
