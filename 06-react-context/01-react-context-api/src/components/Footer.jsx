import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  return (
    <div className={theme}>
      <footer>
        <h4>{texts.footerTitle}</h4>
      </footer>
    </div>
  );
};

export default Footer;
