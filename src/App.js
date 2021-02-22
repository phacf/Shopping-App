import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDiscountsThunk, getProductsThunk } from "./store/ducks";
import { BsPeopleCircle } from "react-icons/bs";
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
      <div className="header">
        <p>Shopping</p>
        <span style={{display:"flex"}}>
          <BsPeopleCircle /> <p style={{'font-size':'0.4em', 'margin-left': '1vw'}}>John Doe</p>
        </span>
      </div>

      <div className="appContainer">
        <div className="shopContainer">
          <ProductList loading={loading} error={error} />
        </div>

        <div className="cartContainer">
          <Cart setCheckout={setCheckout} checkout={checkout} />
        </div>
      </div>
    </div>
  );
}

export default App;
