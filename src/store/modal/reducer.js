import {
  INITIAL_STATE,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_MESSAGE_SUCCESS
} from './model';

export const modal = (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        type: action.payload['type'],
        items: action.payload['items'],
        customer: action.payload['customer'],
        active: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        active: false,
        message: null
      }
    case SET_MESSAGE_SUCCESS:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
}
