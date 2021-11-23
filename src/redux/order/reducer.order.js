import { createReducer } from "@reduxjs/toolkit";
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { orderActions as actions } from ".";

const orderInitialState = { totalPrice: 0 }
const order = createReducer(orderInitialState, {
    // [actions.totalPrice]: (_, { payload }) => { return { state: 'totalPrice' } },
    [actions.incrementByAmount]: (state, { payload }) => {
        state.totalPrice = payload
    },
    [actions.increment]: (state, { payload }) => {
        const price = state.totalPrice * payload;
        return { ...state, totalPrice: price }
    },
    [actions.decrement]: (state, { payload }) => {
        return { ...state, totalPrice: state.totalPrice / payload }
    }
});

export default persistCombineReducers(
    { key: 'totalPrices', storage, blacklist: ['loading'] },
    { order }
);
