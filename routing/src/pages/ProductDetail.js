import { Fragment } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();

  return (
    <Fragment>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </Fragment>
  );
}
