import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDiscountsThunk, getProductsThunk } from "./store/ducks";
import ProductList from "./components/ProductsList";

function App() {
  const dispatch = useDispatch();
  const [pLoading, setPLoading] = useState(true);
  const [dLoading, setDLoading] = useState(true);
  const [pError, setPError] = useState(false)
  const [dError, setDError] = useState(false)

  useEffect(() => {
    dispatch(getProductsThunk(setPLoading, setPError));
    dispatch(getDiscountsThunk(setDLoading, setDError));
  }, []);
  
  return (
    <div>
      <ProductList loading={pLoading} error = {pError} />
    </div>
  );
}

export default App;
