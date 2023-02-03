const AddToCart = (newProduct) => {
  let getProduct = JSON.parse(localStorage.getItem("productLike")) || [];
  getProduct.push(newProduct);
  localStorage.setItem("productLike", JSON.stringify(getProduct));
};
export default AddToCart;
