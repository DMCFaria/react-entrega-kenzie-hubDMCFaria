import styled from "styled-components";

const STYLED_BUTTON = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  button {
    background-color: #ff577f;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    width: 268px;
    padding: 10px 6px;
    cursor: pointer;
  }
  button:hover {
    background-color: #59323f;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    width: 268px;
    padding: 10px 6px;
  }
`;
export default STYLED_BUTTON;
