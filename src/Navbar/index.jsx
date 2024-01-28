import React, { useState } from 'react'
import { StyledNavbar } from './StyledNavbar'
import i18n from '../i18next';

function Navbar() {
  const [isActive, setIsActive] = useState("en")
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsActive(lng)
  }

  return (
    <StyledNavbar>
      <nav>
        <h1>Monkey Casino</h1>
        <div>
          <span className={`en ${isActive === "en" ? 'active' : ""}`} onClick={() => changeLanguage("en")}>EN</span>
          <span className={`me ${isActive === "me" ? 'active' : ""}`}onClick={() => changeLanguage("me")}>ME</span>
        </div>
      </nav>
    </StyledNavbar>
  )
}

export default Navbar