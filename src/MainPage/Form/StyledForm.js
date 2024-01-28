import styled from "styled-components";

export const StyledForm = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 20px 30px;
  background: rgba(48, 181, 135, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  @media screen and (max-width: 768px) {
    width: 70%;
  }
  .success-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      margin-bottom: 24px;
    }
    p {
      font-size: 18px;
    }
    div {
      width: 200px;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  h1 {
    margin-top: 0px;
    margin-bottom: 48px;
  }
  .fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
    margin-bottom: 32px;
    div {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
    h4 {
      margin-bottom: 10px;
      margin-top: 0px;
    }
    input {
      width: 100%;
      border: 0px;
      height: 24px;
      border-radius: 4px;
    }
    select {
      width: 100%;
      height: 24px;
      border: none;
      border-radius: 4px;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 0;
      height: 20px;
      font-weight: 600;
      font-size: 12px;
      padding: 5px;
      border-radius: 6px;
      text-align: left;
      &.error {
        background-color: crimson;
        color: #fff;
      }
    }
  }
  button {
    height: 40px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #30b587;
    font-size: 16px;
    font-weight: bold;
  }
  button:hover {
    background-color: #30b587;
    color: #fff;
    border: 1px solid #fff;
  }
`;
