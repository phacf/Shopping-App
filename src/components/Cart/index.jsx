import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  // const discounts = useSelector((state) => state.reducer.discounts);
  const cart = useSelector((state) => state.reducer.cart);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const CartCard = ({ product }) => {
    const dispatch = useDispatch();
    const [amound, setAmound] = useState(product.amound);
    const [price, setPrice] = useState(product.price);

    const increaseAmound = () => {
      if (amound < product.available) {
        setAmound(amound + 1);
        product.amound = amound + 1;
      }
      price < product.price * product.available &&
        setPrice(product.price + product.price * amound);
    };

    const decreaseAmound = () => {
      if (amound > 1) {
        setAmound(amound - 1);
        product.amound = amound - 1;
      }
      price > product.price && setPrice(product.price * amound - product.price);
    };

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
          <button onClick={() => increaseAmound()}>+</button>
          {amound}
          <button onClick={() => decreaseAmound()}>-</button>
        </span>
      </div>
    );
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
//console.log(cart)
  return (
    <div>
      {cart.map((product, index) => (
        <CartCard product={product} key={index}/>
      ))}
    </div>
  );
};
export default Cart;
