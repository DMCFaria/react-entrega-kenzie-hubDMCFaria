import styled from "styled-components";
const STYLED_REGISTERPAGE = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  min-height: 100vh;
  padding-bottom: 20px;
  background-color: #121214;
  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 130px;
  }
  section > h2 {
    margin: 20px 0;
  }
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
    margin-bottom: 25px;
  }

  div {
    background-color: #212529;
    width: 250px;
    text-align: center;
    padding: 10px 6px;
    cursor: pointer;
    border-radius: 4px;
  }
  div:hover {
    background-color: #3e4146;
  }
  a {
    text-decoration: none !important;
    color: #ffffff;
  }
  p {
    text-align: start;
  }
`;
export default STYLED_REGISTERPAGE;
