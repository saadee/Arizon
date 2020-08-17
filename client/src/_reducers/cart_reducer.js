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
        cartItems: newItems,
        loading: false,
      };
    case "DEL_FROM_CART":
      
    //   let targetcartItems = state.cartItems.find((items) => {
    //     return items.description == payload.description
    // })
    // if (targetcartItems) {
    //     let getIndex=state.cartItems.indexOf(targetcartItems);
    //     state.cartItems.splice(getIndex,1);
    // }
    let targetcartItem;
    for(let i=0 ; i<=state.cartItems.length;i++){
      if(state.cartItems[i].description === payload.description){
        
        let getIndex=state.cartItems.indexOf(state.cartItems[i]);
        state.cartItems.splice(getIndex,1);
      }
    }
    
      return {
        ...state,
        cartItems:state.cartItems,
        
        // cartItems: state.cartItems.filter((post) => post._id !== payload),

        loading: false,
      };
    default:
      return state;
  }
}
