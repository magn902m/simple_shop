import BasketContainerStyles from "./BaskerContainer.module.css";
import Basket from "../Basket/Basket";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function BasketContainer(props) {
  return (
    <section className={BasketContainerStyles.basket_container}>
      <Basket products={props.products} setBasket={props.setBasket} basket={props.basket} />
      <CheckoutForm products={props.products} setBasket={props.setBasket} basket={props.basket} />
    </section>
  );
}
