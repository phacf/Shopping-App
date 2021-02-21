import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkoutThunk } from "../../store/ducks";
import CartCard from "./CartCard";

const Cart = ({ setCheckout, checkout }) => {
  const dispatch = useDispatch();
  const vouchers = useSelector((state) => state.reducer.discounts);
  const products = useSelector((state) => state.reducer.products);
  const cart = useSelector((state) => state.reducer.cart);
  const [subTotal, setSub] = useState(0);
  const [inputVoucher, setInput] = useState("");
  const [discount, setDiscount] = useState(0);
  const [shipping, setShip] = useState(100);

  const calculateTotal = (product) => {
    const subTotal = cart.reduce(
      (acumulator, next) => acumulator + next.subTotal,
      0
    );
    setSub(subTotal);
  };

  const handleDiscount = () => {
    let voucher = vouchers.find(
      (voucher) => voucher.code.toLowerCase() === inputVoucher.toLowerCase()
    );

    if (voucher) {
      switch (voucher.code) {
        case "#30OFF":
          setDiscount((subTotal * 30) / 100);
          break;

        case "#100DOLLARS":
          setDiscount(100);
          break;

        case "#SHIPIT":
          setShip(0);
          setDiscount(0);
          break;
        default:
          setDiscount(0);
          break;
      }
    } else {
      setDiscount(0);
    }
    setInput("");
  };

  const handleCheckout = () => {
    cart.forEach((element) => {
      products.find((product) => {
        if (product.name === element.name) {
          product.available -= element.amount;
        }
        return null;
      });
    });
    dispatch(checkoutThunk());
    setSub(0);
    setDiscount(0);
    setShip(100);
    setInput("");
    setCheckout((checkout = checkout + 1));
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
        value={inputVoucher}
        type="text"
        name="voucher"
        id="voucher"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleDiscount()}>apply</button>

      <div>Subtotal: ${subTotal}</div>
      <div>Shipping: ${shipping}</div>
      <div>Discount: ${discount}</div>
      <div>Total: $ {subTotal + shipping - discount}</div>
      <button onClick={() => handleCheckout()}>CHECKOUT</button>
    </div>
  );
};
export default Cart;
