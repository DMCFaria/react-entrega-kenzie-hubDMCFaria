import styled from "styled-components";
const STYLED_MAIN = styled.main`
  color: white;
  padding: 0 10vw;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid white;
  .div_title_modal {
    display: flex;
    justify-content: space-between;
    gap: 20vw;
    align-items: center;
    button {
      background-color: #212529;
      border: none;
      width: 30px;
      height: 30px;
      color: white;
      font-size: 1.25rem;
      font-weight: 700;
      border-radius: 4px;
    }
  }
  ul {
    background-color: #212529;
    width: 80vw;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;

    li {
      list-style: none;
      margin: 10px;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 4px;
      min-height: 54px;

      background-color: #121214;

      div {
        display: flex;
        justify-content: space-between;
        div {
          align-items: center;
          gap: 10px;
          p {
            font-size: 0.75rem;
            color: #868e96;
          }
        }
      }
    }
  }
`;
export default STYLED_MAIN;
