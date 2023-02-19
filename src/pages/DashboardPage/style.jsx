import styled from "styled-components";

const STYLED_DASHBOARD = styled.section`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  background-color: #121214;
  .Nav_dash {
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
    margin: 20px;
    h2 {
      margin-top: 0;
    }
    Button {
      background-color: #212529;
      width: 70px;
    }
    .Header_dash {
      h1 {
        color: white;
      }
    }
  }
  @media (min-width: 768px) {
    font-family: "Inter", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    background-color: #121214;
    .Nav_dash {
      display: flex;
      flex-direction: row;
      width: 90%;
      justify-content: space-around;
      margin: 5vh 5vw;
      h2 {
        margin-top: 0;
      }
      Button {
        background-color: #212529;
        width: 70px;
      }
    }
  }
`;
export default STYLED_DASHBOARD;
