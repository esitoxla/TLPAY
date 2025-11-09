import { configureStore } from "@reduxjs/toolkit";
import transferReducer from "./features/transferSlice"
import smsReducer from "./features/smsSlice"
export const store = configureStore({
    reducer: {
        transfer: transferReducer,
        sms: smsReducer,
    }
})