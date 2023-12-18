import { useParams } from "react-router-dom";

export function ServiceDetail({ services }) {
  const { id } = useParams();
  const service = services.find((service) => service.id.toString() === id);

  return (
    <section>
      <h1>Detalle del Servicio</h1>
      <h2>{service.name}</h2>
      <h3>{service.description}</h3>
    </section>
  );
}
