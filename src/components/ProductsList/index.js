import { useSelector } from "react-redux";
import ProductCard from "../ProductCards";
const ProductList = ({ loading, error }) => {
  const products = useSelector((state) => state.reducer.products);
  const discounts = useSelector((state) => state.reducer.discounts);
  console.log(products);
  return <div> {!error ? (loading ? "loading..." : products.map((product,index)=> <ProductCard product={product}/>)) : "error"}</div>;
};
export default ProductList;
