import {
  INITIAL_STATE,
  FETCH_ORDERS_STARTED,
  FETCH_ORDERS_SUCCESED,
  CHANGE_NAV_ORDERS,
  ADD_ITEMS_MODAL,
  MENU_PENDING,
  MENU_HISTORIAL
} from './model';

export const orders = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_ORDERS_STARTED:
      return {
        ...state,
        loading: true
      }

    case FETCH_ORDERS_SUCCESED:
      return {
        ...state,
        loading: false,
        list: action.payload['entities'],
        result: action.payload['result']
      }
    case CHANGE_NAV_ORDERS:
      return {
        ...state,
        menuActive: state.menuActive === MENU_PENDING ?
          MENU_HISTORIAL : MENU_PENDING
      }
    case ADD_ITEMS_MODAL:
      console.log('asdas',action.payload)
      return {
        ...state,
        orders: action.payload['items'],
        customer: action.payload['customer'],
        total: action.payload['total']
      }
    default:
      return state;
  }
}
