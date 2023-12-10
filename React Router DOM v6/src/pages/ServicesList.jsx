import { Link } from "react-router-dom";

export function ServicesList({ services }) {
  return (
    <>
      <h1>Lista de Servicios</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <Link to={`/services/${service.id}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
