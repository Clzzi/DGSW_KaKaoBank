import {
  ChangeEvent,
  ClipboardEvent,
  FocusEvent,
  KeyboardEvent,
  useRef,
} from 'react';

interface IUseAuthInput {
  Reg: RegExp;
  length: number;
  onChange: (res: string) => void;
}

const useAuthInput = ({ Reg, onChange, length }: IUseAuthInput) => {
  const inputsRef = useRef<Array<HTMLInputElement>>([]);

  const sendResult = () => {
    const res = inputsRef.current.map((input) => input.value).join('');
    onChange(res);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(Reg)) {
      if (e.target.nextElementSibling !== null) {
        (e.target.nextElementSibling as HTMLInputElement).focus();
      }
    } else {
      e.target.value = '';
    }
    sendResult();
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;

    if (key === 'Backspace') {
      if (target.value === '' && target.previousElementSibling !== null) {
        if (target.previousElementSibling !== null) {
          (target.previousElementSibling as HTMLInputElement).focus();
          e.preventDefault();
        }
      } else {
        target.value = '';
      }
      sendResult();
    }
  };

  const handleOnFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleOnPaste = (e: ClipboardEvent<HTMLInputElement>) => {
    const value = e.clipboardData.getData('Text');
    if (value.match(Reg)) {
      for (let i = 0; i < length && i < value.length; i++) {
        inputsRef.current[i].value = value.charAt(i);
        if (inputsRef.current[i].nextElementSibling !== null) {
          (inputsRef.current[i].nextElementSibling as HTMLInputElement).focus();
        }
      }
      sendResult();
    }
    e.preventDefault();
  };
  return {
    handleOnChange,
    handleOnPaste,
    handleOnFocus,
    handleOnKeyDown,
    inputsRef,
  };
};

export default useAuthInput;
