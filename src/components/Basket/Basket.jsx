import { useContext } from "react";
import BasketStyles from "./Basket.module.css";
import { BasketContext } from "../../contexts/basketContext";
import BasketItem from "../BasketItem/BasketItem";

export default function Basket(props) {
  const { basket, setBasket } = useContext(BasketContext);

  //Total price
  const initialValue = 0;
  const sumWithInitial = basket.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount * currentValue.price,
    initialValue
  );

  // console.log(sumWithInitial);

  return (
    <>
      <h3 className={BasketStyles.basket_h3}>
        Your basket (
        {basket
          .map((product) => product.amount)
          .reduce((previousValue, currentValue) => previousValue + currentValue, 0)}{" "}
        items)
      </h3>
      <article>
        {basket.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
      </article>
      <p className={BasketStyles.total_price}>
        Total price: <strong>{sumWithInitial}</strong> DKK
      </p>
    </>
  );
}
