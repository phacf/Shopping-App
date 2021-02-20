import { useState } from "react";

const CartCard = ({ product, calculateTotal }) => {
  //const dispatch = useDispatch();
  const [amount, setamount] = useState(product.amount);
  const [price, setPrice] = useState(product.price);

  const increaseamount = () => {
    if (amount < product.available) {
      setamount(amount + 1);
      product.amount = amount + 1;
    }
    if (price < product.price * product.available) {
      setPrice(product.price * amount + product.price);
      product.subTotal = product.price * amount + product.price;
    }
  };

  const decreaseamount = () => {
    if (amount > 1) {
      setamount(amount - 1);
      product.amount = amount - 1;
    }
    if (price > product.price) {
      setPrice(product.price * amount - product.price);
      product.subTotal = product.price * amount - product.price;
    }
  };
  calculateTotal(product);
  return (
    <div>
      <img
        style={{ width: "100px" }}
        alt="foto"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.ucf.edu%2Fwp-content%2Fuploads%2Fsites%2F5%2F2015%2F08%2Fphoto-not-available.jpg&f=1&nofb=1"
      />
      <h3>{product.name}</h3>
      <div>{price}</div>
      <span>
        <button onClick={() => increaseamount()}>+</button>
        {amount}
        <button onClick={() => decreaseamount()}>-</button>
      </span>
    </div>
  );
};
export default CartCard;
