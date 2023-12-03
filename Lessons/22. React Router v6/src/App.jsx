import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import "./App.css";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Error404 } from "./pages/Error404";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
