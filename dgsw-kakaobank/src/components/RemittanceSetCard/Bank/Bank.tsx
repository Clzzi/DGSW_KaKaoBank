import { StlyedBankWrapper, StyledBank, StyledTitle, StyledWrapper } from "./Bank.style";

const Bank = () => {
  return (
    <StyledWrapper>
      <StyledTitle>은행 선택</StyledTitle>
      <StlyedBankWrapper>
        <StyledBank>토스</StyledBank>
        <StyledBank>신한</StyledBank>
        <StyledBank>카카오</StyledBank>
        <StyledBank>토스2</StyledBank>
      </StlyedBankWrapper>
    </StyledWrapper>
  );
};

export default Bank;
