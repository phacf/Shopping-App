import axios from "axios";

const ActionsType = {
  GET_PRODUCTS: "@shop/GET_PRODUCTS",
  GET_DISCOUNT: "@shop/GET_DISCOUNT",
};

const Actions = {
  getProducts: (products) => ({
    type: ActionsType.GET_PRODUCTS,
    products,
  }),
  getDiscounts: (discounts) => ({
    type: ActionsType.GET_DISCOUNT,
    discounts,
  }),
};

const reducer_state = {
  products: {},
  discounts: {},
};

const reducer = (state = reducer_state, actions) => {
  switch (ActionsType) {
    case ActionsType.GET_PRODUCTS:
      const { products } = actions;
      reducer_state.products = products;
      return state;

    case ActionsType.GET_DISCOUNT:
      const { discounts } = actions;
      reducer_state.discounts = discounts;
      return state;

    default:
      return state;
  }
};
export default reducer;

export const Thunk = {
  getProducts: () => (dispatch) => {
    axios(
      "https://shielded-wildwood-82973.herokuapp.com/products.json"
    ).then((res) => console.log(res));
  },
  getDiscounts: () => (dispatch) => {
    axios(
      "https://shielded-wildwood-82973.herokuapp.com/vouchers.json"
    ).then((res) => console.log(res));
  },
};
