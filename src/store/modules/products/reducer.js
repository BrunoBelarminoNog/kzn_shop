import {ADD_PRODUCT} from './actionsTypes';
import products from '../../../products'

const initialState = products;

const productsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_PRODUCT:
            return [...initialState, payload]
        default:
            return state
    }
}

export default productsReducer;