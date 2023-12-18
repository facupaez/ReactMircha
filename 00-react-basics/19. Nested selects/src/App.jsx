import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NestedSelects from "./components/NestedSelects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NestedSelects />
    </>
  );
}

export default App;
