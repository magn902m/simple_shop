import { useContext } from "react";
import BasketItemStyles from "./BasketItem.module.css";
import { BasketContext } from "../../contexts/basketContext";

export default function BasketItem(props) {
  const { basket, setBasket } = useContext(BasketContext);

  function removeProduct(id) {
    setBasket((oldState) => oldState.filter((item) => item.id !== id));
  }
  console.log(basket);

  function changeCount(operator, id) {
    setBasket((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          const copy = {
            ...item,
            amount:
              operator === "plus"
                ? item.amount + 1
                : item.amount > 1
                ? item.amount - 1
                : item.amount,
          };

          return copy;
        }
        return item;
      })
    );
  }

  return (
    <article>
      <section
        // key={Math.random()}
        className="BasketStyles.product_card"
      >
        <img
          className={BasketItemStyles.product_img}
          src={`https://kea-alt-del.dk/t7/images/webp/640/${props.item.id}.webp`}
          alt=""
        />
        <h4>{props.item.articletype}</h4>
        <p>{props.item.productdisplayname}</p>
        <p>
          <strong>{props.item.price * props.item.amount}</strong> DKK
          <button data-task="minus" onClick={() => changeCount("minus", props.item.id)}>
            -
          </button>
          <span>{props.item.amount}</span>
          <button
            data-task="plus"
            className="animated"
            onClick={() => changeCount("plus", props.item.id)}
          >
            +
          </button>
        </p>
        <button onClick={() => removeProduct(props.item.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bag-x-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6.854 8.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293 6.854 8.146z"
            />
          </svg>
        </button>
      </section>
    </article>
  );
}
