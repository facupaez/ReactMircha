import React from "react";

const Main = ({ theme, texts }) => {
  return (
    <div className={theme}>
      <main>
        <p>{texts.mainWelcome}</p>
        <p>{texts.mainHello}</p>
        <p>{texts.mainContent}</p>
      </main>
    </div>
  );
};

export default Main;
