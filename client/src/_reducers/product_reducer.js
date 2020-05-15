const initialState = {
  products: [],
  product: {},
  Skip: 0,
  Limit: 12,
  loading: true,
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "PRODUCT_UPLAODED":
      return {
        ...state,
        products: [...state.products, payload],
        loading: false,
      };
    case "GET_PRODUCTS":
      let newProducts = state.products.concat(payload);
      return {
        ...state,
        products: newProducts,
        Skip: 12,
        loading: false,
      };
    case "GET_PRODUCT":
      return {
        ...state,
        product: payload,
        loading: false,
      };
    default:
      return state;
  }
}
