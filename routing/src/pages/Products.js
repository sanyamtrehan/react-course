import { Fragment } from "react";
import { Link } from "react-router-dom";

const PRODUCT_ITEMS = [
  { id: "product-1", title: "Product 1" },
  { id: "product-2", title: "Product 2" },
  { id: "product-3", title: "Product 3" },
];

const ProductsPage = () => {
  return (
    <Fragment>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCT_ITEMS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id} relative="path">
              {prod.title}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ProductsPage;
