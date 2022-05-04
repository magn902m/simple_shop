import { useRef } from "react";

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
    <form ref={formElm} onSubmit={submitted}>
      <label htmlFor="fullname">Full name</label>
      <input required type="text" name="fullname" id="fullname" />
      <label htmlFor="address">Address</label>
      <input required type="text" name="address" id="address" />
      <button type="submit">Pay</button>
    </form>
  );
}
