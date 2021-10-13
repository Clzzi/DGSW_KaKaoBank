import { ChangeEvent, CSSProperties } from 'react';
import InfoInput from '../Input/InfoInput';
import { StyledForm } from './Form.style';

interface IFormProps {
  title: string;
  error: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  type?: string;
  name: string;
  maxLength?: number;
  customInputStyle?: CSSProperties;
  customTitleInputStyle?: CSSProperties;
}

const Form = ({
  error,
  name,
  onChange,
  placeholder,
  title,
  value,
  customInputStyle,
  customTitleInputStyle,
  maxLength,
  type,
}: IFormProps): JSX.Element => {
  return (
    <StyledForm>
      <div className="title" style={customTitleInputStyle}>
        {title}
      </div>
      <InfoInput
        type={type ? type : 'text'}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
        customStyle={customInputStyle}
        maxLength={maxLength && maxLength}
      />
      {error && <div className="error">{error}</div>}
    </StyledForm>
  );
};

export default Form;
