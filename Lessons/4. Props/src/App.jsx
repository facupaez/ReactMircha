import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Properties from "./components/Properties";
import Component from "./components/Component";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Properties
          string="Esto es una cadena de texto"
          number={20}
          boolean={false}
          array={[1, 2, 3]}
          object={{ name: "Carlos", email: "carlos@email.com" }}
          reactElement={<i>Esto es un elemento React</i>}
          function={(num) => num * num}
          reactComponent={<Component />}
        />
      </div>
    </>
  );
}

export default App;
