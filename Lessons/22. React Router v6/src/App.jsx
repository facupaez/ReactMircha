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
import { useState } from "react";
import { Services } from "./pages/Services";
import { ServicesWarranty } from "./pages/ServicesWarranty";
import { ServicesHome } from "./pages/Serviceshome";
import { ServicesList } from "./pages/ServicesList";
import { ServicesPolitics } from "./pages/ServicesPolitics";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", description: "Description 1" },
    { id: 2, name: "Product 2", description: "Description 2" },
    { id: 3, name: "Product 3", description: "Description 3" },
    { id: 4, name: "Product 4", description: "Description 4" },
    { id: 5, name: "Product 5", description: "Description 5" },
  ]);

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
          <Route path="/products" element={<Products products={products} />} />
          <Route
            path="/products/:id"
            element={<ProductDetail products={products} />}
          />
          <Route path="/services" element={<Services />}>
            <Route index element={<ServicesHome />} />
            <Route path="warranty" element={<ServicesWarranty />} />
            <Route path="list" element={<ServicesList />} />
            <Route path="politics" element={<ServicesPolitics />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
