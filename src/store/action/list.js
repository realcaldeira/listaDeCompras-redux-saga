export const Types = {
  ADD_PRODUCT: 'list/ADD_PRODUCT',
  DELETE_PRODUCT: 'list/DELETE_PRODUCT',
  TOGGLE_PRODUCT: 'list/TOGGLE_PRODUCT',
  UPDATE_PRODUCT: 'list/UPDATE_PRODUCT',
}

export const Creators = {
  addProduct: (product, list)=> ({
      type: Types.ADD_PRODUCT,
      product,
      list
    }),
    deleteProduct: productId =>({
      type: Types.DELETE_PRODUCT,
      productId,
    }),
    toggleProduct: productId =>({
      type: Types.TOGGLE_PRODUCT,
      productId,
    }),
    updateProduct: (product, list)=> ({
      type: Types.UPDATE_PRODUCT,
      product,
      list,
    }),
}