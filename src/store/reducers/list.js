import { Types } from "../action/list";

const initialState ={
  list: null,
  items: [],
}

export default function list(state=initialState, action){
  switch(action.type){
    case Types.ADD_PRODUCT:
      return {
        list: action.list, 
        items: [
          ...state.items, 
          {...action.product, total: getItemTotal(action.product)}
        ] };
    default: 
      return state;
  }
}

function getItemTotal(product){
  return product.price * product.quantity
}