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
  const [checkout, setCheckout] = useState(0);

  useEffect(() => {
    if (error || loading) {
      dispatch(getProductsThunk(setLoading, setError));
      dispatch(getDiscountsThunk(setLoading, setError));
    }
  }, [error, loading, dispatch]);

  return (
    <div className="container">
      <div className="shopContainer">
        <ProductList loading={loading} error={error} />
      </div>
      <div className="cartContainer">
        <Cart setCheckout={setCheckout} checkout={checkout} />
      </div>
    </div>
  );
}

export default App;
