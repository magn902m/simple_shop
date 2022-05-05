import { useRef } from "react";
import CheckoutFormStyles from "./CheckoutForm.module.css";

export default function CheckoutForm(props) {
  const formElm = useRef(null);

  function submitted(e) {
    e.preventDefault();

    fetch("dbendpoint/orders", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: formElm.current.elements.fullname.value,
        address: formElm.current.elements.address.value,
      })
        .then((res) => res.json())
        .then((data) => {}),
    });
    // Link to the video: https://www.youtube.com/watch?v=dJmpFBBhunE&list=PLCx1FpZ4Dtb28s8QmoibIp556euUafoMe&index=24
    console.log(formElm.current.elements.fullname.value);
    console.log(formElm.current.elements.address.value);
  }
  return (
    <form className={CheckoutFormStyles.form} ref={formElm} onSubmit={submitted}>
      <div className={CheckoutFormStyles.form_div}>
        <label htmlFor="fullname">Full name</label>
        <input required type="text" name="fullname" id="fullname" />
      </div>
      <div className={CheckoutFormStyles.form_div}>
        <label htmlFor="address">Address</label>
        <input required type="text" name="address" id="address" />
      </div>
      <button className="button-6" type="submit">
        Checkout
      </button>
    </form>
  );
}
