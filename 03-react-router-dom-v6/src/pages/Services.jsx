import { Link, Outlet } from "react-router-dom";

export function Services() {
  return (
    <>
      <h1>Servicios</h1>
      <nav className="menu">
        <Link to="/services">Inicio</Link>
        <Link to="/services/list">Lista</Link>
        <Link to="/services/warranty">Garantía</Link>
        <Link to="/services/politics">Politica</Link>
      </nav>
      <Outlet />
    </>
  );
}
