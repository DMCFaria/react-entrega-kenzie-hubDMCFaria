import styled from "styled-components";

const STYLED_INPUT = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;
  margin: 0;
  align-self: flex-start;
  input {
    padding: 0px 7%;
    border-radius: 4px;
    border: 2px solid #f8f9fa;
    width: 139%;
    height: 30px;
    color: #f8f9fa;
    background-color: #343b41;
  }
`;
export default STYLED_INPUT;
