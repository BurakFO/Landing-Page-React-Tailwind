import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    banner: "IT Hizmetleri ile Geleceğe Hazırlanın",
    bannerTextColor: "#fffff", //burdan devammmmm
    bannerDetail: "Yenilikçi çözümlerle işinizi büyütün",
    bannerBackgroundColor: "#003366"
};


export const bannerSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {
        setBanner: (state, action) => {
            state.banner = action.payload;
        },

        setBannerTextColor: (state, action) => {
            state.banner = action.payload;
        },

        setBannerDetail: (state, action) => {
            state.bannerDetail = action.payload;
        },

        setBannerBackgroundColor: (state, action) => {
            state.bannerBackgroundColor = action.payload;
        }
    },
});


// Eylemleri dışa aktar
export const { setBanner, setBannerDetail, setBannerBackgroundColor } = bannerSlice.actions;

// banner seçicisini dışa aktar
export const selectBanner = (state) => state.banner;

// Dilimi dışa aktar
export default bannerSlice.reducer;

