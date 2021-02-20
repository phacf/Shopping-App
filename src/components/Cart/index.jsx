import { useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const Cart = () => {
  const discounts = useSelector((state) => state.reducer.discounts);
  const cart = useSelector((state) => state.reducer.cart);
  const [subTotal, setSub] = useState(0);
  const [inputVoucher, setInput] = useState("");
  const [discount, setDiscount] = useState(10);
  const shipping = 10;

  const calculateTotal = (product) => {
    const subTotal = cart.reduce(
      (acumulator, next) => acumulator + next.subTotal,
      0
    );
    //.toFixed(2);
    setSub(subTotal);
  };
  //console.log(discounts);

  const handleSubmit = () => {
    console.log(inputVoucher);
  };



  return (
    <div>
      {cart.map((product, index) => (
        <CartCard
          product={product}
          key={index}
          calculateTotal={calculateTotal}
        />
      ))}

      <input
        type="text"
        name="voucher"
        id="voucher"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleSubmit()}>apply</button>

      <div>Subtotal: ${subTotal}</div>
      <div>Shipping: ${shipping}</div>
      <div>Discount: ${discount}</div>
      <div>Total: $ {subTotal + shipping - discount}</div>
    </div>
  );
};
export default Cart;
