import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            const productToAdd = action.payload;

            const existingProduct = state.find(item => item.id === productToAdd.id);

            if (existingProduct) {
                if (existingProduct.quantity <= 5) {
                    existingProduct.quantity += 1;
                }
            }
            else {
                state.push({ ...productToAdd, quantity: 1 })
            }
        },
        remove: () => { }
    }
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;