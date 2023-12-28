import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialOutletState = {
    outletState: 'all',
    quantityMeatState: "all",
    quantityYearState: "all",
    valueMeatState: "all",
    valueYearState: "all",
    refillMeatState: "all",
    refillYearState: "all",
}

const outletSlice = createSlice({
    name: "outlet",
    initialState: initialOutletState,
    reducers: {
        setOutletState(state, action) {
            state.outletState = action.payload;
        },
        setQuantityMeatState(state, action) {
            state.quantityMeatState = action.payload;
        },
        setQuantityYearState(state, action) {
            state.quantityYearState = action.payload;
        },
        setRefillMeatState(state, action) {
            state.refillMeatState = action.payload;
        },
        setRefillYearState(state, action) {
            state.refillYearState = action.payload;
        },
        setValueMeatState(state, action) {
            state.valueMeatState = action.payload;
        },
        setValueYearState(state, action) {
            state.valueYearState = action.payload;
        }
    }
});



export const outletActions = outletSlice.actions;

const store = configureStore({
    reducer: {
        outlet: outletSlice.reducer
    }
})

export default store;