import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, UPDATE_QUANTITY } from './actions';

const initialState = {
  items: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // check if an item with the given product id is already in the cart (return the current state if so)
      if (state.items.some(item => item.id === action.payload.id)) return state;

      // adds the product to the cart with a quanitity of 1 (for products not already in the cart)
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      // returns the current state with items having all instances of the given id filtered out
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case CLEAR_CART:
      // returns a state with no items
      return {
        ...state,
        items: [],
      };
    case UPDATE_QUANTITY:
      // if the quanity being set is less than 1 set it to 1 (prevents user from having 0 or negative quantity)
      if(action.payload.quantity < 1) action.payload.quantity = 1;

      // returns a state where all the items with id that matches the product id are mapped to the themselves
      //but with quanitity set to the given quantitiy
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;