import React from "react";
import LoginForm from "./Form";
import { StyledMainPage } from './StyledMainPage'

function MainPage({ lazar }) {
  return (
    <StyledMainPage>
      <LoginForm />
    </StyledMainPage>
  );
}

export default MainPage;
