import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    companyName: "heyguys",
    loading: "naber"
};

export const companyNameSlice = createSlice({
    name: "companyName",
    initialState,
    reducers: {
        setCompanyName: (state, action) => {
            state.companyName = action.payload;
        }
        // Reducerlar burada tanımlanabilir
        // örneğin: setCompanyName: (state, action) => { state.companyName = action.payload; },
    },
});

// Eylemleri dışa aktar
export const { setCompanyName } = companyNameSlice.actions;

// companyName seçicisini dışa aktar
export const selectCompanyName = (state) => state.companyName;

// Dilimi dışa aktar
export default companyNameSlice.reducer;
