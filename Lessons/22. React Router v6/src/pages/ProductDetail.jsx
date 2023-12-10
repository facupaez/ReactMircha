import { useParams, useNavigate } from "react-router-dom";

export function ProductDetail() {
  function getProduct(id) {
    const products = [
      { id: 1, name: "Product 1", description: "Description 1" },
      { id: 2, name: "Product 2", description: "Description 2" },
      { id: 3, name: "Product 3", description: "Description 3" },
      { id: 4, name: "Product 4", description: "Description 4" },
      { id: 5, name: "Product 5", description: "Description 5" },
    ];

    return products.find((product) => product.id.toString() === id);
  }

  function handleGoBack() {
    navigate(-1);
  }

  const navigate = useNavigate();
  const { id } = useParams();
  const product = getProduct(id);

  return (
    <section>
      <h1>Detalle de Producto</h1>
      <h2>{product.name}</h2>
      <h3>{product.description}</h3>
      <button onClick={handleGoBack}>Regresar</button>
    </section>
  );
}
