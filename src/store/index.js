import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import productsReducer from './modules/products/reducer'

const reducers = combineReducers({products: productsReducer})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;