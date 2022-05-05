//Logic
import { useState, useEffect, useContext } from "react";

//Components
import ProductList from "../components/ProductList/ProductList";
// import BasketContainer from "../components/BasketContainer/BasketContainer";
import { BasketContext } from "../contexts/basketContext";

import ProductsStyles from "./Products.module.css";

export default function Products() {
  const { basket } = useContext(BasketContext);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function get() {
      const res = await fetch(`https://kea-alt-del.dk/t7/api/products/?start=${page}`);
      const data = await res.json();
      setProducts(data);
    }
    get();
  }, [page]);

  return (
    <main className={ProductsStyles.ProductsMain}>
      <h3 style={{ marginBottom: "2rem" }}>
        Your basket (
        {basket
          .map((product) => product.amount)
          .reduce((previousValue, currentValue) => previousValue + currentValue, 0)}{" "}
        items)
      </h3>
      <ProductList products={products} page={page} setPage={setPage} />
      {/* <BasketContainer /> */}
    </main>
  );
}
