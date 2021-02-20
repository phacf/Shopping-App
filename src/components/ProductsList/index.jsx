import { useSelector } from "react-redux";
import ProductCard from "./Card.jsx";

const ProductList = ({ loading, error }) => {
  const products = useSelector((state) => state.reducer.products);
  

  
  return (
    <div>
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
