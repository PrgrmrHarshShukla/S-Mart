export const initialState = {
   basket: [],
   user: null,
};

// Selector
export const getBasketTotal = (basket) =>
   basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = ( state, action ) => {
   // console.log(action);
   switch(action.type) {

      case 'ADD_TO_BASKET':
         return {
            ...state, 
            basket: [...state.basket, action.item]
         };

      case 'EMPTY_BASKET':
         return {
            ...state,
            basket: []
         }   


      case 'REMOVE_FROM_BASKET':
         // console.log('reducer tak aaya');
         const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
         );
         let newBasket = [...state.basket];
         if ( index >= 0 ) {
            // console.log('2 tak aaya');
            newBasket.splice(index, 1);
         }
         else {
            console.warn(`Can not remove product (id: ${action.id}) as its not in basket!`
            )
         }      
         return {
            ...state,
            basket: newBasket
         };


      case 'SET_USER':
         return {
            ...state,
            user: action.user
         }



      default:
         return state;
   }

};

export default reducer;