import styled from '@emotion/styled';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  overflow: hidden;
  animation: slide 10s linear infinite;
  .Cards {
    background: url('https://user-images.githubusercontent.com/62810965/136688366-e1f5ec9e-386c-4e29-97dc-786e30105fe2.png');
    width: 100%;
    height: 250px;
    background-size: 2300px 250px;
    animation: slide 30s linear infinite;
  }

  @keyframes slide {
    0% {
      background-position: 0px 0px;
    }
    100% {
      background-position: -2300px 0px;
    }
  }
`;
