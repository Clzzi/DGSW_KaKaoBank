import InfoInput from 'components/Common/Input/InfoInput';
import { ChangeEvent, CSSProperties } from 'react';
import { StyledForm } from './Form.style';

interface IFromProps {
  title: string;
  error: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  type?: string;
  name: string;
}

const Form = ({
  onChange,
  error,
  name,
  type,
  value,
  title,
  placeholder,
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
      />
      {error && <div className="error">{error}</div>}
    </StyledForm>
  );
};

export default Form;
