import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import productsReducer from './modules/products/reducer';
import {cartReducer, positionCartReducer} from './modules/cart/reducer';

const reducers = combineReducers({products: productsReducer, cart: cartReducer, positionCart: positionCartReducer})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;