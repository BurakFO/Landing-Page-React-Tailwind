import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    servicesTitle: "Hizmetlerimiz",
    servicesCard: {
        card1: {
            title: "Yazılım Geliştirme",
            description: "Kapsamlı yazılım çözümleri sunuyoruz",
        },
        card2: {
            title: "Siber Güvenlik",
            description: "İşinizi güvence altına alıyoruz.",
        },
        card3: {
            title: "Bulut Hizmetleri",
            description: "Bulut çözümlerimizle işinizi büyütün.",
        }
    }
};

export const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {

    },
});




export const selectServices = (state) => state.services;

export default servicesSlice.reducer;