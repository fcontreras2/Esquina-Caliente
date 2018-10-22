import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { user } from './user/reducer';
import { menu } from './menu/reducer';
import { orders } from './orders/reducer';
import { modal } from './modal/reducer';

//import { saveCart } from '../shared/localStorage/localStorage';

const reducers = combineReducers({
  form: formReducer,
  user,
  menu,
  orders,
  modal
})

export const store = createStore(
  reducers,
  {}, // Estado inicial del proyecto
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// store.subscribe(() => {
//   let cart = store.getState()['cart']
//   saveCart(cart)
// })
