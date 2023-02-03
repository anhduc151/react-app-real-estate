const initState = {
  likeProduct: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "likeProduct/checkLikeProduct":
      let currentProduct = state.likeProduct;
      let products = currentProduct;
      const newProduct = action.payload;
      if (products.length > 0) {
        products = [...products, newProduct];
      } else {
        products = [newProduct];
      }
      return {
        ...state,
        likeProduct: products,
      };
    default:
      return state;
  }
};
export default rootReducer;
