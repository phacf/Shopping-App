import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDiscountsThunk, getProductsThunk } from "./store/ducks";
import "./app.css";
import ProductList from "./components/ProductsList/";
import Cart from "./components/Cart";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error || loading) {
      dispatch(getProductsThunk(setLoading, setError));
      dispatch(getDiscountsThunk(setLoading, setError));
    }
  }, [error, loading, dispatch]);

  return (
    <div className="container">
      <ProductList loading={loading} error={error} />
      <Cart />
    </div>
  );
}

export default App;
