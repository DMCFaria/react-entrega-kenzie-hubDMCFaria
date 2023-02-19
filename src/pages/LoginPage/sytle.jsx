import styled from "styled-components";
const STYLED_LOGINPAGE = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  padding-bottom: 20px;
  background-color: #121214;

  form {
    background-color: #212529;
    border-radius: 4px;
    padding: 22px 22px;
    width: 268px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f8f9fa;
    gap: 20px;
  }
  div {
    background-color: #868e96;
    width: 250px;
    text-align: center;
    padding: 10px 6px;
    cursor: pointer;
    border-radius: 4px;
  }
  div:hover {
    background-color: #3e4449;
  }
  a {
    text-decoration: none !important;
    color: #ffffff;
  }
`;
export default STYLED_LOGINPAGE;
