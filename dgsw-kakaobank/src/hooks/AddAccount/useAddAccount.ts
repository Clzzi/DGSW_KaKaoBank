import useLink from 'hooks/Common/useLink';
import Toast from 'lib/Token';
import { ChangeEvent, CSSProperties, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { phoneState } from 'store/addAccount';
import { ColorPalette } from 'styles/ColorPalette';
import makePhoneNumber from 'util/makePhoneNumber';
import addAccountValidation from 'validation/addAccount.validation';

const useAddAccount = () => {
  const { handleLink: pushNext } = useLink('/getInfo2');
  const { handleLink: pushMain } = useLink('/main');
  const [phone, setPhone] = useRecoilState<string>(phoneState);
  const [phoneError, setPhoneError] = useState<string>('');

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(makePhoneNumber(e.target.value));
    checkPhone(e.target.value);
  };

  const customButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: ColorPalette.main,
      color: ColorPalette.fureBlack,
      marginTop: '65px',
    };
  }, []);

  const checkPhone = (value: string) => {
    if (value.length < 13) {
      setPhoneError('전화번호를 제대로 입력해주세요');
    } else {
      setPhoneError('');
    }
  };

  const onClickFind = () => {
    if (addAccountValidation.checkEmpty(phone)) {
      localStorage.setItem('AddCard', 'setCard');
      pushNext();
    }
  };

  const checkGetInfo = () => {
    if (sessionStorage.getItem('AddCard') !== 'getInfo') {
      Toast.errorToast('비정상적인 접근입니다.');
      pushMain();
    }
  };

  return {
    phoneError,
    onChangePhone,
    phone,
    onClickFind,
    customButtonStyle,
    checkGetInfo,
  };
};

export default useAddAccount;
