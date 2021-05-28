import {ADD_PRODUCTONCART, REMOVE_PRODUCTONCART, POSITION_CART} from './actionsTypes'

const initialState = JSON.parse(localStorage.getItem("@KNZSHOP/cart")) || [];

export const cartReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_PRODUCTONCART: 
            return [...payload]
        case REMOVE_PRODUCTONCART: 
            return [...payload];
        default: 
            return state
    }
}

export const positionCartReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case POSITION_CART:
            return {...payload}
        default:
            return state
    }
}