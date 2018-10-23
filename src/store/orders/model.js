export const MENU_PENDING = 'orders';
export const MENU_HISTORIAL = 'history';


export const list = {
  [MENU_PENDING]: [],
  [MENU_HISTORIAL]: [],
}
// Estado inicial
export const INITIAL_STATE = {
  list,
  result: list,
  orders: {},
  total: 0,
  loading: false,
  menuActive: MENU_PENDING,
  customer: null,
}

// ACTIONS TYPES
export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDERS_STARTED = 'FETCH_ORDERS_STARTED';
export const FETCH_ORDERS_SUCCESED = 'FETCH_ORDERS_SUCCESED';

export const CHANGE_NAV_ORDERS = 'CHANGE_NAV_ORDERS';

export const ADD_ITEMS_MODAL = 'ADD_ITEMS_MODAL';
