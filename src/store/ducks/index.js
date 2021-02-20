import axios from "axios";

const ActionsType = {
  GET_PRODUCTS: "@shop/GET_PRODUCTS",
  GET_DISCOUNT: "@shop/GET_DISCOUNT",
  SEND_TO_CART: "@client/SEND_TO_CART",
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

const sendToCart = (product) => ({
  type: ActionsType.SEND_TO_CART,
  product,
});

//     THUNK
export const getProductsThunk = (setLoading, setError) => (dispatch) => {
  axios("https://shielded-wildwood-82973.herokuapp.com/products.json")
    .then((res) => {
      dispatch(getProducts(res.data.products));
      setLoading(false);
    })
    .catch((error) => {
      setLoading(true);
      setError(true);
    });
};

export const getDiscountsThunk = (setLoading, setError) => (dispatch) => {
  axios("https://shielded-wildwood-82973.herokuapp.com/vouchers.json")
    .then((res) => {
      dispatch(getDiscounts(res.data.vouchers));
      setLoading(false);
    })
    .catch((error) => {
      setLoading(true);
      setError(true);
    });
};

export const sendToCartThunk = (product) => (dispatch) => {
  dispatch(sendToCart(product));
};

//    REDUCER
const reducer_state = {
  products: [],
  discounts: [],
  cart: [],
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

    case ActionsType.SEND_TO_CART:
      const { product } = action;
      if (
        !reducer_state.cart.find(
          (product_cart) => product_cart.name === product.name
        )
      ) {
        reducer_state.cart = [...reducer_state.cart, product];
      }

      return state;

    default:
      return state;
  }
};
export default Reducer;
