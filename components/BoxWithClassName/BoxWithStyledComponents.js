import styled from "styled-components";

export default function BoxWithStyledComponents({ $isBlack }) {
  return <StyledBox $isBlack={$isBlack}></StyledBox>;
}

const StyledBox = styled.div`
  width: 200px;
  height: 100px;
  margin: 2rem;

  background-color: ${({ $isBlack }) => ($isBlack ? "black" : "green")};

  &:hover {
    background: red;
  }
`;
