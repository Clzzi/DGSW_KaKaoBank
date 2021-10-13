import {
  StyledBackground,
  StyledButton,
  StyledContent,
  StyledModal,
} from './Modal.style';
import ModalPortal from './Portal';

interface IModalProps {
  title: string;
  content: string;
  handleNo: () => void;
  handleYes: () => void;
}

const Modal = ({ title, content, handleNo, handleYes }: IModalProps) => {
  return (
    <ModalPortal>
      <StyledBackground>
        <StyledModal>
          <StyledContent>
            <div className="title">{title}</div>
            <div className="content">{content}</div>
          </StyledContent>
          <StyledButton>
            <button className="no" onClick={handleNo}>
              아니요
            </button>
            <button className="yes" onClick={handleYes}>
              예
            </button>
          </StyledButton>
        </StyledModal>
      </StyledBackground>
    </ModalPortal>
  );
};

export default Modal;
