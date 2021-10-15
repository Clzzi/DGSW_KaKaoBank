import useLink from 'hooks/Common/useLink';
import JSConfetti from 'js-confetti';
import Toast from 'lib/Toast';
import { CSSProperties, useMemo, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { accountPasswordState } from 'store/establishAccount';
import { ColorPalette } from 'styles/ColorPalette';

const useEstablishAccount = () => {
  const confetti = useRef<JSConfetti | null>(null);
  const [password, setPassword] = useRecoilState<string>(accountPasswordState);
  const [passwordError, setPasswordError] = useState('');

  const { handleLink: pushNext } = useLink('/establish/complete');
  const { handleLink: pushMain } = useLink('/main');

  const popEmoji = () => {
    confetti.current?.addConfetti({
      emojis: ['🎇', '✨', '😎', '🎈', '🧨', '🎉', '🎊'],
      // @ts-ignore
      emojiSize: 36,
      confettiNumber: 100,
    });
  };

  const onChangePassword = (res: string) => {
    setPassword(res);
    checkPasswordError(res);
  };

  const checkPasswordError = (res: string) => {
    if (res.length < 4) {
      setPasswordError('비밀번호를 올바르게 입력해주세요');
    } else {
      setPasswordError('');
    }
  };

  const customButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: ColorPalette.main,
      color: ColorPalette.fureBlack,
    };
  }, []);

  const onClickEstablish = () => {
    if (password.length === 4) {
      sessionStorage.setItem('EstablishCard', 'complete');
      pushNext();
    }
  };

  const checkPasswordStorage = () => {
    if (sessionStorage.getItem('EstablishCard') !== 'getPassword') {
      Toast.errorToast('비정상적인 접근입니다.');
      pushMain();
    }
  };

  const checkCompleteStorage = () => {
    if (sessionStorage.getItem('EstablishCard') !== 'complete') {
      Toast.errorToast('비정상적인 접근입니다.');
      pushMain();
    }
  };

  const onClickComplete = () => {
    sessionStorage.removeItem('EstablishCard');
    popEmoji();
    confetti.current = null;
    pushMain();
  };

  return {
    pushMain,
    checkPasswordStorage,
    checkCompleteStorage,
    password,
    passwordError,
    setPassword,
    setPasswordError,
    onClickComplete,
    onChangePassword,
    customButtonStyle,
    onClickEstablish,
    popEmoji,
    confetti,
  };
};

export default useEstablishAccount;
