const initialState = {
  images: [],
  products: [],
  loading: true,
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "UPLOAD_IMAGE":
      return {
        ...state,
        images: payload,
        loading: false,
      };
    case "PRODUCT_UPLAODED":
      return {
        ...state,
        products: [...state.products, payload],
        loading: false,
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: payload,
        loading: false,
      };
    default:
      return state;
  }
}
