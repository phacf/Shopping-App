import { sendToCartThunk } from "../../store/ducks";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const sendToCart = () => {
    product = { ...product, ...{ amount: 1, subTotal: product.price } };
    dispatch(sendToCartThunk(product));
  };

  return (
    <div>
      <img
        style={{ width: "100px" }}
        alt="foto"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.ucf.edu%2Fwp-content%2Fuploads%2Fsites%2F5%2F2015%2F08%2Fphoto-not-available.jpg&f=1&nofb=1"
      />
      <div>{product.name}</div>
      <div>
        Price: ${product.price} &#8226; {product.available} Left
      </div>
      <button onClick={() => sendToCart()}> send to cart</button>
    </div>
  );
};
export default ProductCard;
