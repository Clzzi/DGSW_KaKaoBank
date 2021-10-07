import InfoInput from 'components/Common/Input/InfoInput';
import { ChangeEvent } from 'react';
import { StyledForm } from './Form.style';

interface IFromProps {
  title: string;
  error: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  type?: string;
  name: string;
  maxLength?: number;
}

const Form = ({
  onChange,
  error,
  name,
  type,
  value,
  title,
  placeholder,
  maxLength,
}: IFromProps) => {
  return (
    <StyledForm>
      <div className="title">{title}</div>
      <InfoInput
        type={type ? type : 'text'}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
        customStyle={{ marginBottom: '4px' }}
        maxLength={maxLength && maxLength}
      />
      {error && <div className="error">{error}</div>}
    </StyledForm>
  );
};

export default Form;
