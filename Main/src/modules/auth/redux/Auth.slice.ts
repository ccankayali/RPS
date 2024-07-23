import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AUTH_INFO_KEY } from "../../../core/constants";
import LocalStorageManager from "../../../utils/LocalStorageManager";

export interface AuthState {
    accessToken: string | null;
    name: string
}

const authInfo = (LocalStorageManager.get(AUTH_INFO_KEY) as AuthState) ?? {
    accessToken: null,
    name: ''
}

const initialState: AuthState = {
    accessToken: authInfo.accessToken,
    name: authInfo.name
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ accessToken: string }>) => {
            state.accessToken = action.payload.accessToken;
            LocalStorageManager.set(AUTH_INFO_KEY, {accessToken: state.accessToken})
        },

        logout: state => {
            state.accessToken = null;
            LocalStorageManager.remove(AUTH_INFO_KEY)
        },

        initUser: state => {
            if (state.accessToken) {
                state.name = 'Authenticated User'
            }
        }
    }
})

export const { login, logout, initUser } = {...AuthSlice.actions}

export const authReducer = AuthSlice.reducer