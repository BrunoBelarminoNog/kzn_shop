import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => {
  return (dispatch, getStore) => {
    const { id } = product;
    const { cart } = getStore();
    const list = cart;

    let quantity;
    let newProduct = true;
    let indexProduct 

    cart.forEach((product, index) => {
      if(product.id === id) {
        newProduct = false
        indexProduct = index
      }  
    })

    if (newProduct) {
      quantity = 1;
    } else {
      quantity = cart[indexProduct].quantity + 1;
      newProduct = false;
    }

    let productEdited = {
      ...product,
      quantity,
    };

    if (newProduct) {
      list.unshift(productEdited);
    } else {
      list.splice(indexProduct, 1, productEdited);
    }

    localStorage.setItem("@KNZSHOP/cart", JSON.stringify(list));
    dispatch(addToCart(list));
  };
};

export const removeFromCartThunk = (product) => (dispatch, getStore) => {
  const { cart } = getStore();
  const { id } = product;

  let quantity;
  let indexProduct 

  cart.forEach((product, index) => {
    if(product.id === id) {
      indexProduct = index
    }  
  })

  if (Number(cart[indexProduct].quantity) >= 2) {
    quantity = cart[indexProduct].quantity - 1;
  } else {
    quantity = 1
  }

  let productEdited = {
    ...product,
    quantity,
  };

  cart.splice(indexProduct, 1, productEdited);

  localStorage.setItem("@KNZSHOP/cart", JSON.stringify(cart));
  dispatch(addToCart(cart));
};

export const removeAllFromCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();

  const list = cart.filter((product) => product.id !== id);
  localStorage.setItem("@KNZSHOP/cart", JSON.stringify(list));
  dispatch(removeFromCart(list));
};
