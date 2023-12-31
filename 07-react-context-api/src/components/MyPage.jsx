import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";

const initialAuth = null;

const MyPage = () => {
  const [auth, setAuth] = useState(initialAuth);

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <Header auth={auth} handleAuth={handleAuth} />
          <Main auth={auth} />
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default MyPage;
