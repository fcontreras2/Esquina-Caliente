import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_MESSAGE_SUCCESS
 } from './model';

export const closeModal  = () => (
  {
    type: CLOSE_MODAL
  }
)

export const openModal = payload => (
  {
    type: OPEN_MODAL,
    payload
  }
)

export const setMessageSuccess = (payload) => (
  {
    type: SET_MESSAGE_SUCCESS,
    payload
  }
)
