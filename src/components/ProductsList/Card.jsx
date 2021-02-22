import { sendToCartThunk } from "../../store/ducks";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const sendToCart = () => {
    product = { ...product, ...{ amount: 1, subTotal: product.price } };
    dispatch(sendToCartThunk(product));
  };

  return (
    <div className="shopCard">
      <img
        alt="foto"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.ucf.edu%2Fwp-content%2Fuploads%2Fsites%2F5%2F2015%2F08%2Fphoto-not-available.jpg&f=1&nofb=1"
      />
      <p className="title">{product.name}</p>
      <div className="description">
        $ {product.price} &#8226; {product.available} Left
      </div>
      <div className='button' onClick={() => product.available> 0 && sendToCart()} >
        BUY
      </div>
    </div>
  );
};
export default ProductCard;
