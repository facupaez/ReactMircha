import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";

const Main = ({ auth }) => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  return (
    <main className={theme}>
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
      <p>{texts.mainContent}</p>
    </main>
  );
};

export default Main;