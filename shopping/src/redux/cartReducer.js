import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
}

export const cartSlice = createSlice({
  name: '购物车',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id)
      item ? item.quantity += action.payload.quantity : state.products.push(action.payload)
    },
    delToCart: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload)
    }
  },
});

// 为每个 case reducer 函数生成 Action creators
export const { addToCart, delToCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;