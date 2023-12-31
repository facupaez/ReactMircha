import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Footer = ({ texts }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <footer>
        <h4>{texts.footerTitle}</h4>
      </footer>
    </div>
  );
};

export default Footer;
