const initialState = {
  products: [],
  MensDenim: [],
  MensShirts: [],
  MensTshirts: [],
  MensShoes: [],
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
    case "GET_MENS_DENIM":
      let newDenim = state.MensDenim.concat(payload);
      return {
        ...state,
        MensDenim: newDenim,
        Skip: 12,
        loading: false,
      };
    case "GET_MENS_SHIRTS":
      let newShirts = state.MensShirts.concat(payload);
      return {
        ...state,
        MensShirts: newShirts,
        Skip: 12,
        loading: false,
      };
    case "GET_MENS_TSHIRTS":
      let newTshirts = state.MensTshirts.concat(payload);
      return {
        ...state,
        MensTshirts: newTshirts,
        Skip: 12,
        loading: false,
      };
    case "GET_MENS_SHOES":
      let newShoes = state.MensShoes.concat(payload);
      return {
        ...state,
        MensShoes: newShoes,
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
