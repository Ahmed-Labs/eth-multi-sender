import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const BG = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px;
  background: linear-gradient(-45deg, #060930, #333456, #595b83, #f4abc4);
  background-size: 400% 400%;
  animation: ${animation} 10s ease infinite;
`;

function AnimatedBG() {
  return <BG />;
}

export default AnimatedBG;
