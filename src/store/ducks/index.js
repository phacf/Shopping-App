import axios from "axios";

const ActionsType = {
  GET_PRODUCTS: "@shop/GET_PRODUCTS",
  GET_DISCOUNT: "@shop/GET_DISCOUNT",
};

//         ACTIONS
const getProducts = (products) => ({
  type: ActionsType.GET_PRODUCTS,
  products,
});
const getDiscounts = (discounts) => ({
  type: ActionsType.GET_DISCOUNT,
  discounts,
});

//     THUNK
export const getProductsThunk = (setLoading, setError) => (dispatch) => {
  axios("https://shielded-wildwood-82973.herokuapp.com/products.json")
    .then((res) => {
      dispatch(getProducts(res.data.products));
      setLoading(false);
    })
    .catch((error) => {
      setError(true)
      console.error(error)
    });
};

export const getDiscountsThunk = (setLoading, setError) => (dispatch) => {
  axios("https://shielded-wildwood-82973.herokuapp.com/vouchers.json")
    .then((res) => dispatch(getDiscounts(res.data.vouchers)))
    .catch((error) => {
      setError(true)
      console.error(error)
    });
};

const reducer_state = {
  products: [],
  discounts: [],
};

const Reducer = (state = reducer_state, action) => {
  switch (action.type) {
    case ActionsType.GET_PRODUCTS:
      const { products } = action;
      reducer_state.products = products;
      return state;

    case ActionsType.GET_DISCOUNT:
      const { discounts } = action;
      reducer_state.discounts = discounts;
      return state;

    default:
      return state;
  }
};
export default Reducer;
