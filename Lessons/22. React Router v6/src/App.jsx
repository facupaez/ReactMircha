import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import "./App.css";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Error404 } from "./pages/Error404";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<About />} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
