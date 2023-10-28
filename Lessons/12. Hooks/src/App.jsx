import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HookCounter from "./components/HookCounter";
import "./App.css";
import HookScroll from "./components/HookScroll";
import HookWatch from "./components/HookWatch";

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
        <HookCounter title="Seguidores" />
        <HookScroll />
        <HookWatch />
      </div>
    </>
  );
}

export default App;
