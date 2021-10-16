import {
  MouseEvent,
  MouseEventHandler,
  RefObject,
  useRef,
  useState,
} from 'react';
import TermModal from '../TermModal';
import { StyleTerm, StyleTermButton, StyleTermLink } from './Term.style';

interface ITermProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  check: boolean;
}

const Term = ({ onClick, check }: ITermProps) => {
  const modalEl: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const [click, setClick] = useState(false);

  const handleClickOutside = (e: MouseEvent): void => {
    if (modalEl.current && !modalEl.current.contains(e.target as Node)) {
      setClick(false);
    }
  };

  return (
    <StyleTerm>
      <StyleTermButton onClick={onClick} check={check} />
      <StyleTermLink onClick={() => setClick((prev) => !prev)}>
        약관동의
      </StyleTermLink>
      <TermModal
        outSideRef={modalEl}
        show={click}
        onClickOutside={handleClickOutside}
      />
    </StyleTerm>
  );
};

export default Term;
