import { Link, NavLink } from "react-router-dom";

export function Menu() {
  return (
    <div>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/acerca">Acerca</Link>
        <Link to="/about">About</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/products">Productos</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/inexistente">Error 404</Link>
      </nav>
      <nav className="menu">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/acerca"
        >
          Acerca
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/contacto"
        >
          Contacto
        </NavLink>
      </nav>
    </div>
  );
}
