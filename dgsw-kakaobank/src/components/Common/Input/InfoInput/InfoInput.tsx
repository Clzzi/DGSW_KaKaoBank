import { ChangeEvent, CSSProperties } from 'react';
import { StyledInfoInput } from './InfoInput.style';

interface IInfoInputProps {
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
  placeholder: string;
  customStyle?: CSSProperties;
}

const InfoInput = ({
  name,
  onChange,
  value,
  type,
  placeholder,
  customStyle,
}: IInfoInputProps) => {
  return (
    <StyledInfoInput
      type={type ? type : "text"}
      style={customStyle}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      name={name}
    />
  );
};

export default InfoInput;
