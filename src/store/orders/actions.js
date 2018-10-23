import {
  FETCH_ORDERS_STARTED,
  FETCH_ORDERS_SUCCESED,
  CHANGE_NAV_ORDERS,
  ADD_ITEMS_MODAL
} from './model';

import { setMessageSuccess } from '../modal/actions';

import { openModal } from '../modal/actions';
import { normalize } from 'normalizr';
import { orders } from './normalize';
import * as query from '../../utils/api';

export const fetchOrders = () => (
  (dispatch) => {
    dispatch(fetchOrdersStarted())
    setTimeout(() => {
      query.getOrders().then(payload => {
        dispatch({
          type: FETCH_ORDERS_SUCCESED,
          payload: normalize({...payload},orders)
        })
      })
    },500)
  }
)

export const fetchOrdersStarted = () => (
  {
    type: FETCH_ORDERS_STARTED
  }
)

export const openModalOrders = (data) => (
  (dispatch) => {
    dispatch(addItemModal(data))
    dispatch(
      openModal({
        type:'orders',
        items:{...data['order']['items']},
        customer: data['customer']
      })
    )
  }
)

export const addItemModal = (payload) => (
  {
    type: ADD_ITEMS_MODAL,
    payload
  }
)

export const changeNavMenu = () => ({ type: CHANGE_NAV_ORDERS })

export const confirmationOrderToHistory = () => (
  (dispatch,getState) => {
    let data = getState()['orders']
    let id = data['id']
    query.confirmationOrderToHistory(data['list']['orders'][id]).then(payload => {
      dispatch(setMessageSuccess('Se ha realizado el pedido correctamente!'))
      query.deleteOrder(id).then(() => {
        dispatch(fetchOrders())
      })
    })
  }
)
