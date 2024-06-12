import { configureStore } from '@reduxjs/toolkit'
import companyNameReducer from './companyNameSlice'

export const store = configureStore({
    reducer: {
        companyName: companyNameReducer
    },
})