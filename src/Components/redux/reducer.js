import CartData from '../products'
import * as types from './actionTypes'

const initialstate ={
    totalAmount : 0 ,
    totalCount : 0 ,
    cart : CartData
}

const cartReducer = (state = initialstate,action) => {
    switch(action.type){
        

        case types.GET_TOTALS:
             let {totalAmount,totalCount} = state.cart.reduce((cartTotal,cartItem)=>{
                 const{price,quantity} = cartItem;
                 const itemTotal = price * quantity ;

                 cartTotal.totalAmount +=itemTotal;
                 cartTotal.totalCount += quantity;
                 return cartTotal

             },
             {
                 totalAmount: 0,
                 totalCount:0
             }
             );
             totalAmount = parseFloat(totalAmount.toFixed(2));

             return {...state,totalAmount,totalCount};

             case types.INCREASE:
                  let tempCartInc = state.cart.map((cartItem)=>{
                      if(cartItem.id === action.payload){
                          return {...cartItem, quantity : cartItem.quantity + 1}
                      }
                       return cartItem
                  });
                  return{...state,cart:tempCartInc}

                  case types.DECREASE:
                    let tempCartDec = state.cart.map((cartItem)=>{
                        if(cartItem.id === action.payload){
                            return {...cartItem, quantity : cartItem.quantity - 1}
                        }
                         return cartItem
                    }).filter((cartItem)=> cartItem.quantity !== 0);
                    return{...state,cart:tempCartDec}

                    case types.REMOVE:
                         return {
                             ...state,
                             cart : state.cart.filter((cartItem)=>cartItem.id !==action.payload),
                         };

                         case types.CLEAR_ITEMS:
                             return {
                                 ...state,
                                 cart :[],
                             }
  

        default:
            return state;
    }

}

export default cartReducer;