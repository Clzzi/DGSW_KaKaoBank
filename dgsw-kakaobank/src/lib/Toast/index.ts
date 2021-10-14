import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = (message: string, type: string): void => {
  switch (type) {
    case 'SUCCESS':
      toast.success(message, { position: toast.POSITION.TOP_RIGHT });
      break;
    case 'ERROR':
      toast.error(message, { position: toast.POSITION.TOP_RIGHT });
      break;
    case 'INFO':
      toast.info(message, { position: toast.POSITION.TOP_RIGHT });
      break;
    default:
      toast(message, { position: toast.POSITION.TOP_RIGHT });
      break;
  }
};
class Toast {
  public static successToast(message: string): void {
    showToast(message, 'SUCCESS');
  }
  public static errorToast(message: string): void {
    showToast(message, 'ERROR');
  }
  public static infoToast(message: string): void {
    showToast(message, 'INFO');
  }
}

export default Toast;
