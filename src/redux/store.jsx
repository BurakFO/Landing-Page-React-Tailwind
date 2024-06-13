import { configureStore } from '@reduxjs/toolkit'
import companyNameReducer from './companyNameSlice'
import bannerReducer from './bannerSlice'

export const store = configureStore({
    reducer: {
        companyName: companyNameReducer,
        banner: bannerReducer
    },
});