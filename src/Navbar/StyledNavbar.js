import styled from "styled-components";

export const StyledNavbar = styled.div`
  color: #fff;
  width: 100%;
  height: 40px;
  box-sizing: border-box;

  background: rgba(48, 181, 135, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  nav{
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    h1 {
      margin: 0px;
    }
    div {
      margin-right: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 70px;
      @media screen and (max-width: 768px) {
        margin-right: 0px;
      }
      span {
        width: 50%;
        cursor: pointer;
        border-radius: 6px;
      }
      .active {
        background-color: #fff;
        color: #000;
      }
    }
  }
`;
