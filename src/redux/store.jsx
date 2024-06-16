import { configureStore } from '@reduxjs/toolkit'
import companyNameReducer from './companyNameSlice'
import bannerReducer from './bannerSlice'
import servicesReducer from './servicesSlice'

export const store = configureStore({
    reducer: {
        companyName: companyNameReducer,
        banner: bannerReducer,
        services: servicesReducer
    },
});