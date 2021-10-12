import Toast from 'lib/Token';

class addAccountValidation {
  public static checkEmpty = (value: string) => {
    if (value.length < 13 || value === null || value === undefined) {
      return false;
    }
    return true;
  };

  public static checkGetInfo = () => {
    if (sessionStorage.getItem('AddCard') !== 'getInfo') {
      Toast.errorToast('비정상적인 접근입니다.');
      return false;
    }
    return true;
  };
}

export default addAccountValidation;
