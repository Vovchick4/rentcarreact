import { createAction } from '@reduxjs/toolkit';

export const totalPrice = createAction('order/totalPrice')
export const incrementByAmount = createAction('order/incrementByAmount')
export const increment = createAction('order/increment')
export const decrement = createAction('order/decrement')