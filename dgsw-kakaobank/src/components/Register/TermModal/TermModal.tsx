import { RefObject, useEffect } from 'react';
import {
  StyledTermModal,
  StyledTermModalContent,
  StyledTermModalWrapper,
} from './TermModal.style';

const TermModal = ({
  show,
  onClickOutside,
  outSideRef,
}: {
  show: boolean;
  onClickOutside: (e: any) => void;
  outSideRef: RefObject<HTMLDivElement>;
}) => {
  useEffect(() => {
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [onClickOutside]);
  return (
    <StyledTermModal show={show}>
      <StyledTermModalWrapper>
        <StyledTermModalContent ref={outSideRef}>
          <div className="title">약관안내</div>
          <div className="content">
            카카오뱅크 in DGSW 서비스에서는 사용자의 주민등록번호 7자리 및
            휴대전화번호, 이름을 수집하고있습니다. 해당 정보는 서비스를 위해서
            잘 쓰일것이니 미리 감사인사드립니다. 항상 감사합니다. 그리고 다른
            은행보다 많이 싸고 좋은 은행이니까 열심히 이용해주세요 블라블라블라
            카카오뱅크 in DGSW 서비스에서는 사용자의 주민등록번호 7자리 및
            휴대전화번호, 이름을 수집하고있습니다. 해당 정보는 서비스를 위해서
            잘 쓰일것이니 미리 감사인사드립니다. 항상 감사합니다. 그리고 다른
            은행보다 많이 싸고 좋은 은행이니까 열심히 이용해주세요 블라블라블라
            카카오뱅크 in DGSW 서비스에서는 사용자의 주민등록번호 7자리 및
            휴대전화번호, 이름을 수집하고있습니다. 해당 정보는 서비스를 위해서
            잘 쓰일것이니 미리 감사인사드립니다. 항상 감사합니다. 그리고 다른
            은행보다 많이 싸고 좋은 은행이니까 열심히 이용해주세요 블라블라블라
            감사합니다.
          </div>
        </StyledTermModalContent>
      </StyledTermModalWrapper>
    </StyledTermModal>
  );
};

export default TermModal;
