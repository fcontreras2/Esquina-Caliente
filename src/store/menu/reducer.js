import {
  initialState,
  FETCH_MENU_STARTED,
  FETCH_MENU_SUCCESED,
  CHANGE_NAV_MENU,
  MENU_REST,
  MENU_BREAKFAST,
  ADD_ITEM,
  REMOVE_ITEM,
} from './model';

export const menu = (state = initialState, action) => {

  let keyItem = null;

  switch(action.type) {
    case FETCH_MENU_STARTED:
      return {
        ...state,
        loading: true
      }
    case FETCH_MENU_SUCCESED:
      console.log('aaa',action.payload)
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

    default:
      return state;
  }
}
