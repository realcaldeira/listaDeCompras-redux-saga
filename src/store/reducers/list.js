import { createSelector } from 'reselect'
import { v1 } from 'uuid';
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
          {...action.product, total: getItemTotal(action.product), id: v1(), checked: false }
        ] };
    case Types.DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.productId)
      };
    case Types.TOGGLE_PRODUCT:
      return {
        ...state,
        items: toggleItem(state.items, action.productId)
      };
    case Types.UPDATE_PRODUCT:
      return {
        list: action.list,
        items: updateProduct(state.items, action.product),
      }
    default: 
      return state;
  }
}


//HELPERS
function getItemTotal(product){
  return product.price * product.quantity
}

function toggleItem(items, productId){
  const index = items.findIndex(item => item.id === productId);
  return [
    ...items.slice(0, index), //todos os items antes do item a ser modificado
    { ...items[index], checked: !items[index].checked }, //item atualizado 
    ...items.slice(index + 1) //todos os items depois do item a ser modificado
  ]
}

function updateProduct(items, product){
  const index = items.findIndex(item => item.id === product.id);
  return [
    ...items.slice(0, index), 
    { ...product, total: getItemTotal(product)},  
    ...items.slice(index + 1),
  ]
}

//SELECTORS
export const getListTotal = createSelector(
  state => state.list.items,
  items =>  items.reduce((total, item)=> total + item.total, 0)
)
export const getOpenedItems = createSelector(
  state => state.list.items,
  items =>  items.filter(item => !item.checked).length  
)
export const getClosedItems = createSelector(
  state => state.list.items,
  items =>  items.filter(item => item.checked).length 
)