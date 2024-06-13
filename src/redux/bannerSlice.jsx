import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    banner: "IT Hizmetleri ile Geleceğe Hazırlanın"
};


export const bannerSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {
        setBanner: (state, action) => {
            state.banner = action.payload;
        }
    },
});


// Eylemleri dışa aktar
export const { setBanner } = bannerSlice.actions;

// banner seçicisini dışa aktar
export const selectBanner = (state) => state.banner;

// Dilimi dışa aktar
export default bannerSlice.reducer;

