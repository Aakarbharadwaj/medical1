import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            const productToAdd = action.payload;
            state.push(productToAdd);
        },
        remove: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;