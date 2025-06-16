import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addtocart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // increment quantity if item exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // add new item with quantity 1
      }
    },
    removecart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } 
    //   else {
    //     state.items = state.items.filter(item => item.id !== action.payload);
    //   }
    },
  },
});

export const { addtocart, removecart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
