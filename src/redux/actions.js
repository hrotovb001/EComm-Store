export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// Action to add product to your cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Action to remove product by id from the cart
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

// Action to update the quanitity of a product in your cart at a given id
export const updateQuantity = (productId, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: { productId, quantity },
});

// Action to clear the user's cart
export const clearCart = () => ({
  type: CLEAR_CART,
});