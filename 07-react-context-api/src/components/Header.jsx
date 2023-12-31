import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";

const Header = ({ auth, handleAuth }) => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts, handleLanguage } = useContext(LanguageContext);
  return (
    <div>
      <header className={theme}>
        <h2>{texts.headerTitle}</h2>
        <h3>{texts.headerSubTitle}</h3>
        <select name="language" onChange={handleLanguage}>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <input
          type="radio"
          name="theme"
          id="light"
          value="light"
          onClick={handleTheme}
        />
        <label htmlFor="light">{texts.headerLight}</label>
        <input
          type="radio"
          name="theme"
          id="dark"
          value="dark"
          onClick={handleTheme}
        />
        <label htmlFor="dark">{texts.headerDark}</label>
        <button onClick={handleAuth}>
          {auth ? texts.buttonLogout : texts.buttonLogin}
        </button>
      </header>
    </div>
  );
};

export default Header;
