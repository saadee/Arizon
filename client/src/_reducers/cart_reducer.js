const initialState = {
  cartItems: [],
  loading: true,
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      let newItems = state.cartItems.concat(payload);

      return {
        ...state,
        cartItems: newItems ,
        loading: false,
      };
    default:
      return state;
  }
}
