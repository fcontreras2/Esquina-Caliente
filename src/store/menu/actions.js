import {
  FETCH_MENU_STARTED,
  FETCH_MENU_SUCCESED,
  CHANGE_NAV_MENU,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAN_ORDER,
  TOGGLE_MODAL_CONFIRMATION } from './model';

import { startSubmit } from 'redux-form';
import { normalize } from 'normalizr';
import { menu } from './normalize';

import { setMessageSuccess } from '../modal/actions';

import * as query from '../../utils/api';

export const fetchMenu = () => (
  (dispatch) => {
    dispatch(fetchMenuStarted())
    setTimeout(() => {
      query.getMenu().then(payload => {
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

export const toggleModalConfirmation  = () => (
  {
    type: TOGGLE_MODAL_CONFIRMATION
  }
)

export const cleanOrder = () => (
  {
    type: CLEAN_ORDER
  }
)

export const confirmationOrder = (payload) => (
  (dispatch,getState) => {
    startSubmit('form-customer');
    const { form, menu } = getState();
    let data = {
      customer: form['form-customer']['values'].name,
      items:  menu['orders'],
      total: menu['total']
    }
    query.confirmationOrder(data).then(payload => {
      dispatch(setMessageSuccess('Se ha realizado el pedido correctamente!'))
      dispatch(cleanOrder())
    })
  }
)
