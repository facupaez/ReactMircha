import { useParams, useNavigate } from "react-router-dom";

export function ProductDetail({ products }) {
  function handleGoBack() {
    navigate(-1);
  }

  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((product) => product.id.toString() === id);

  return (
    <section>
      <h1>Detalle de Producto</h1>
      <h2>{product.name}</h2>
      <h3>{product.description}</h3>
      <button onClick={handleGoBack}>Regresar</button>
    </section>
  );
}
