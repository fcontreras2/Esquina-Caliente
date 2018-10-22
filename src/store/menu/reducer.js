import {
  INITIAL_STATE,
  FETCH_MENU_STARTED,
  FETCH_MENU_SUCCESED,
  CHANGE_NAV_MENU,
  MENU_REST,
  MENU_BREAKFAST,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAN_ORDER,
  TOGGLE_MODAL_CONFIRMATION
} from './model';

export const menu = (state = INITIAL_STATE, action) => {

  let keyItem = null;

  switch(action.type) {
    case FETCH_MENU_STARTED:
      return {
        ...state,
        loading: true
      }
    case FETCH_MENU_SUCCESED:
      return {
        ...state,
        loading: false,
        menu: action.payload['entities'],
        result: action.payload['result']
      }
    case CHANGE_NAV_MENU:
      return {
        ...state,
        menuActive: state.menuActive === MENU_BREAKFAST ?
          MENU_REST : MENU_BREAKFAST
      }
    case ADD_ITEM:
      keyItem = action.payload.keyItem;

      if (!state.orders[keyItem])
        state.orders[keyItem] = {...state.menu[state.menuActive][keyItem], count: 0}

      state.orders[keyItem].count++;
      state.total += state.orders[keyItem].price;

      return {
        ...state
      }
    case REMOVE_ITEM:

      keyItem = action.payload.keyItem;
      state.orders[keyItem].count--;
      state.total -= state.orders[keyItem].price;

      if (state.orders[keyItem].count == 0)
        delete state.orders[keyItem];
      return {
        ...state
      }

    case TOGGLE_MODAL_CONFIRMATION:
      return {
        ...state,
        modalActive: !state.modalActive
      }
    case CLEAN_ORDER:
      return {
        ...state,
        orders: {},
        total: 0
      }
    default:
      return state;
  }
}
