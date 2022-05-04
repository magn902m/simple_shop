import Product from "../Product/Product";
import ProductNav from "../ProductNav/ProductNav";
import ProductListStyles from "./ProductList.module.css";

export default function ProductList(props) {
  // console.log(props.products);
  return (
    <>
      <ProductNav
        className={ProductListStyles.product_nav}
        products={props.products}
        setBasket={props.setBasket}
        basket={props.basket}
        page={props.page}
        setPage={props.setPage}
      />
      <section className={ProductListStyles.product_container}>
        {props.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            className={ProductListStyles.product_item}
            setBasket={props.setBasket}
            basket={props.basket}
          />
        ))}
      </section>
      <ProductNav
        className={ProductListStyles.product_nav}
        products={props.products}
        setBasket={props.setBasket}
        basket={props.basket}
        page={props.page}
        setPage={props.setPage}
      />
    </>
  );
}
