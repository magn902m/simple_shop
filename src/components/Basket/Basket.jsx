import { useContext } from "react";
import BasketStyles from "./Basket.module.css";
import { BasketContext } from "../../contexts/basketContext";
import BasketItem from "../BasketItem/BasketItem";

export default function Basket(props) {
  const { basket } = useContext(BasketContext);

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
      <article className={BasketStyles.basket_card}>
        {basket.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
      </article>
      <div className={BasketStyles.total_price}>
        {basket.map((item) => (
          <table className={BasketStyles.checkout_product}>
            <tr>
              <th>{item.productdisplayname}</th>
            </tr>
            <tr>
              <td>
                {item.price} X {item.amount} = {item.price * item.amount} DKK
              </td>
            </tr>
          </table>
        ))}
        <p className={BasketStyles.checkout_product_p}>
          Total price: <strong>{sumWithInitial}</strong> DKK
        </p>
      </div>
    </>
  );
}
