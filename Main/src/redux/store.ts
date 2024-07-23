import { combineReducers } from "redux";
import { authReducer } from "../modules/auth/redux/Auth.slice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    auth: authReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch