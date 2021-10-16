import useLink from 'hooks/Common/useLink';
import Toast from 'lib/Toast';

const useConfirmInfo = () => {
  const { handleLink: pushMain } = useLink('/main');

  const onClickNo = () => {
    pushMain();
  };

  const checkStorage = () => {
    if (sessionStorage.getItem('Remittance') !== 'confirm') {
      Toast.errorToast('비정상적인 접근입니다');
      pushMain();
    }
  };

  return {
    onClickNo,
    checkStorage,
  };
};

export default useConfirmInfo;
