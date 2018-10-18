import { ADD_ITEM, REMOVE_ITEM, ADD_ITEM_COUNT, REMOVE_ITEM_COUNT } from './model';

export const addItem = data => (
  {
    type : ADD_ITEM,
    payload: {}
  }
)

export const removeItem = data => (
  {
    type: REMOVE_ITEM,
    payload: {}
  }
)

export const addItemCount = id => (
  {
    type: ADD_ITEM_COUNT,
    payload: {}
  }
)

export const removeItemCount = id => (
  {
    type: REMOVE_ITEM_COUNT,
    payload: {}
  }
)
