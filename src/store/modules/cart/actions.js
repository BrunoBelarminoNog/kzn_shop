import {ADD_PRODUCTONCART, REMOVE_PRODUCTONCART, POSITION_CART} from './actionsTypes';

export const addToCart = (payload) => ({
    type: ADD_PRODUCTONCART,
    payload
})

export const removeFromCart = (payload) => ({
    type: REMOVE_PRODUCTONCART,
    payload
})

export const positionCart = (payload) => ({
    type: POSITION_CART,
    payload
})

