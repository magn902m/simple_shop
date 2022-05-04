import { useContext } from "react";
import ProductStyles from "./Product.module.css";
import { Link } from "react-router-dom";
import { BasketContext } from "../../contexts/basketContext";

export default function ProductList(props) {
  // const [showMore, setShowMore] = useState(false);
  const { basket, setBasket } = useContext(BasketContext);

  function addToBasket() {
    // console.log(props.product.id);
    if (basket.find((item) => item.id === props.product.id)) {
      console.log("in the basket");
      setBasket((old) =>
        old.map((item) => {
          if (item.id === props.product.id) {
            const copy = { ...item };
            copy.amount++;
            return copy;
          }
          return item;
        })
      );
    } else {
      setBasket((oldBasket) => [...oldBasket, { ...props.product, amount: 1 }]);
    }
  }
  return (
    <article className={ProductStyles.product_card}>
      <Link to={`/products/${props.product.id}`}>
        <img
          className={ProductStyles.product_img}
          src={`https://kea-alt-del.dk/t7/images/webp/640/${props.product.id}.webp`}
          alt=""
        />
      </Link>
      <div className={ProductStyles.text_content}>
        <h4>{props.product.articletype}</h4>
        <p>{props.product.productdisplayname}</p>

        <div className={ProductStyles.card_bottom}>
          <p style={{ marginBlockStart: "1rem", marginBlockEnd: ".5rem" }}>
            <strong>{props.product.price}</strong> DKK
          </p>
          <button onClick={addToBasket}>Add to basket</button>
        </div>
      </div>
    </article>
  );
}
