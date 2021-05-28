import {ADD_PRODUCTONCART, REMOVE_PRODUCTONCART} from './actionsTypes';

export const addToCart = (payload) => ({
    type: ADD_PRODUCTONCART,
    payload
})

export const removeFromCart = (payload) => ({
    type: REMOVE_PRODUCTONCART,
    payload
})
