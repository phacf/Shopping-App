import axios from 'axios'

const ActionsType = {
  GET_PRODUCTS: "@shop/GET_PRODUCTS",
};

const Actions = {
    getProducts: (products)=>({
        type: ActionsType.GET_PRODUCTS,
        products
    })
};

const reducer_state = {
  products: {},
};

const reducer = (state = reducer_state, actions) => {
  switch (ActionsType) {
    case ActionsType.GET_PRODUCTS:
        reducer_state.products =  Actions.getProducts
      return state

    default:
      return state;
  }
};
export default reducer;

export const Thunk = {
    getProducts: (url)=>(dispatch)=>{
        axios(url)
        .then((res)=> console.log(res))
    }
};
