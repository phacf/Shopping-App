import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkoutThunk } from "../../store/ducks";
import "./style.css";
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
          if (subTotal >= 300.50) {
            setShip(0);
            setDiscount(0);
          }
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
    <div style={{ width: "100%" }}>
      <div className="taxesContainer">
        <div className="taxHeader">Shopping Cart</div>
        <div className="cart">
          {cart.map((product, index) => (
            <CartCard
              product={product}
              key={index}
              calculateTotal={calculateTotal}
            />
          ))}
        </div>
        <div className="voucherContainer">
          <input
            value={inputVoucher}
            type="text"
            name="voucher"
            id="voucher"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Discount code"
          />
          <div className="applyButton" onClick={() => handleDiscount()}>
            APPLY
          </div>
        </div>
        <div className="taxes">
          <div className="tax">
            <span>Subtotal:</span> <span>${subTotal}</span>
          </div>
          <div className="tax">
            <span>Shipping:</span> <span>${shipping}</span>
          </div>
          <div className="tax">
            <span>Discount:</span> <span>${discount}</span>
          </div>
          <div className="taxTotal">
            <span>Total:</span> <span>${subTotal + shipping - discount}</span>
          </div>
        </div>
      </div>
      <div className="checkout" onClick={() => handleCheckout()}>
        CHECKOUT
      </div>
    </div>
  );
};
export default Cart;
