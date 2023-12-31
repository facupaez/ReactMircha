import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const initialTheme = "light";
const initialLanguage = "es";

const translations = {
  es: {
    headerTitle: "Mi aplicación SIN Context API",
    headerSubTitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar sesión",
    buttonLogout: "Cerrar sesión",
    mainWelcome: "Bienvenido invitado",
    mainHello: "Hola usuario",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application without Context API",
    headerSubTitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome",
    mainHello: "Hello user",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleTheme = (e) => {
    console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const handleLanguage = (e) => {
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  return (
    <div className="my-page">
      <Header
        theme={theme}
        handleTheme={handleTheme}
        texts={texts}
        handleLanguage={handleLanguage}
      />
      <Main theme={theme} texts={texts} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};

export default MyPage;
