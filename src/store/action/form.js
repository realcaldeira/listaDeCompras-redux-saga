export const Types = {
  START_UPDATE: 'form/START_UPDATE',
  FINISH_UPDATE: 'form/FINISH_UPDATE',
}

export const Creators = {
  startUpdate: (product, list) => ({
    type: Types.START_UPDATE,
    product,
    list,
  }),
  finishUpdate: product => ({
    type: Types.FINISH_UPDATE,
  }),
}