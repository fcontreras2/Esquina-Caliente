import {
  FETCH_MENU,
  FETCH_MENU_STARTED,
  FETCH_MENU_SUCCESED,
  CHANGE_NAV_MENU,
  ADD_ITEM,
  REMOVE_ITEM,
  ADD_ITEM_COUNT,
  REMOVE_ITEM_COUNT } from './model';

import { normalize } from 'normalizr';
import { menu } from './normalize';

import * as query from '../../utils/api';

export const fetchMenu = () => (
  (dispatch) => {
    dispatch(fetchMenuStarted())
    setTimeout(() => {
      query.getMenu().then(payload => {
        console.log(normalize(payload,menu))
        dispatch({
          type: FETCH_MENU_SUCCESED,
          payload: normalize(payload,menu)
        })
      })
    },500)
  }
)

export const fetchMenuStarted = () => ({type: FETCH_MENU_STARTED})
export const changeNavMenu = () => ({ type: CHANGE_NAV_MENU })

export const fetchMenuSuccesed = (data) => (
  {
    type: FETCH_MENU_SUCCESED,
    payload: data
  }
)

export const addItem = payload => (
  {
    type : ADD_ITEM,
    payload
  }
)

export const removeItem = payload => (
  {
    type: REMOVE_ITEM,
    payload
  }
)
