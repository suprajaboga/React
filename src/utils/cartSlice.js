import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      //Mutating the state, Redux toolkit uses immer library background for mutating the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      console.log(current(state));
      state.items.length = 0;
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

/*
When we click on Clear Cart button, RTK says you can either mutate the existing state or return new state
1) state.items.length = 0;
        OR
2) return {items: []}
*/

/*
In Vanilla(Older) Redux => Don't mutate the state, returning was mandatory
We used to create a new state instead of directly mutating the state
const newState = [...state];
newState.items.push(action.payload);
return newState;
*/
