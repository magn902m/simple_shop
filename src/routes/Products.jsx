//Logic
import { useState, useEffect } from "react";

//Components
import ProductList from "../components/ProductList/ProductList";
// import BasketContainer from "../components/BasketContainer/BasketContainer";

import ProductsStyles from "./Products.module.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  // const [basket, setBasket] = useState([]);
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
      <ProductList products={products} page={page} setPage={setPage} />
      {/* <BasketContainer /> */}
    </main>
  );
}
