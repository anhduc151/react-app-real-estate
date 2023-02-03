export const checkLikeProduct = (product) => {
  return {
    type: "likeProduct/checkLikeProduct",
    payload: product,
  };
};
