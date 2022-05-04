import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct(props) {
  const [product, setProduct] = useState([]);

  const params = useParams();
  console.log(params);

  // import useEffct, fetch the product, api $param

  useEffect(() => {
    async function get() {
      const res = await fetch(`https://kea-alt-del.dk/t7/api/products/${params.id}`);
      const data = await res.json();
      setProduct(data);
    }
    get();
  }, [params.id]);

  return (
    <article>
      <img src={`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`} alt="" />
      <h2>Product ID: {params.id}</h2>
      <h3>{product.articletype}</h3>
      <p>{product.productdisplayname}</p>
      <p>
        <strong>{product.price}</strong> DKK
      </p>
    </article>
  );
}
