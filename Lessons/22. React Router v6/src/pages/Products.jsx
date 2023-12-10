import { Link } from "react-router-dom";

export function Products() {
  const products = [
    { id: 1, name: "Product 1", description: "Description 1" },
    { id: 2, name: "Product 2", description: "Description 2" },
    { id: 3, name: "Product 3", description: "Description 3" },
    { id: 4, name: "Product 4", description: "Description 4" },
    { id: 5, name: "Product 5", description: "Description 5" },
  ];
  return (
    <section>
      <h1>Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
