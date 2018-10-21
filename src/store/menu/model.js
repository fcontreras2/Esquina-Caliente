export const MENU_BREAKFAST = 'breakfast';
export const MENU_REST = 'rest';

export const menu = {
  [MENU_BREAKFAST]: [],
  [MENU_REST]: [],
}

// Estado inicial
export const initialState = {
  menu,
  result: menu,
  orders: {},
  menuActive: MENU_BREAKFAST,
  loading: false,
  total: 0
}

// ACTIONS TYPES
export const FETCH_MENU = 'FETCH_MENU';
export const FETCH_MENU_STARTED = 'FETCH_MENU_STARTED';
export const FETCH_MENU_SUCCESED = 'FETCH_MENU_SUCCESED'

export const CHANGE_NAV_MENU = 'CHANGE_NAV_MENU';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
