import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountsThunk, getProductsThunk } from "./store/ducks";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.reducer.products);
  const discounts = useSelector((state) => state.reducer.discounts);

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getDiscountsThunk());
  }, []);

  return <div>asdf</div>;
}

export default App;
