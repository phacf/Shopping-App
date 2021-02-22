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
    <div className="cartCard">
      <img
        style={{ width: "100px" }}
        alt="foto"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.ucf.edu%2Fwp-content%2Fuploads%2Fsites%2F5%2F2015%2F08%2Fphoto-not-available.jpg&f=1&nofb=1"
      />
      <div style={{ width: "100%", 'padding-top':'2vh', 'padding-bottom':'3vh'}}>
        <h3 style={{color: '#333333'}}>{product.name}</h3>
        <div className="cartDesc">
        Quantity:{" "}{amount}

          <span>$: {price}</span>
        </div>
      </div>
      <span className="buttonContainer">
        <div style={{'border-radius': '0px 8px 0px 0px'}} onClick={() => increaseamount()}>+</div>
        <div style={{'border-radius': '0px 0px 8px 0px'}} onClick={() => decreaseamount()}>-</div>
      </span>
    </div>
  );
};
export default CartCard;
