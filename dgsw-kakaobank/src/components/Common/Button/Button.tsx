import { FC, ReactNode, CSSProperties } from 'react';
import { StyledButton } from './Button.style';

interface IButtonProps {
  customStyle?: CSSProperties;
  backgroundColor?: string;
  fontColor?: string;
  children: ReactNode;
  handleClick?: () => void | Promise<void>;
}

const Button: FC<IButtonProps> = ({
  children,
  backgroundColor,
  fontColor,
  handleClick,
  customStyle,
}) => {
  return (
    <StyledButton
      style={customStyle}
      onClick={handleClick}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
