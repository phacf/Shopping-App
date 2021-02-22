import { useSelector } from "react-redux";
import ProductCard from "./Card.jsx";
import './style.css'
const ProductList = ({ loading, error }) => {
  const products = useSelector((state) => state.reducer.products);
  

  console.log(products)
  return (
    <div className='shopContainer1'>
      {" "}
      {!error && loading
        ? "loading..."
        : products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
    </div>
  );
};
export default ProductList;
