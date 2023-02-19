import styled from "styled-components";

const STYLED_HEADER = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  padding: 30px 0;
  border-top: 1px solid white;
  h1 {
    color: white;
  }
  p {
    color: #868e96;
  }
  @media (min-width: 768px) {
    width: 90%;
    justify-content: space-around;
    padding: 5vh 5vw;
  }
`;
export default STYLED_HEADER;
