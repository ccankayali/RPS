import { useAppDispatch, useAppSelector } from "../../../core/hooks/useRedux";
import { initUser, login, logout } from "../redux/Auth.slice";

export const useAuth = () => {
    const dispatch = useAppDispatch();
    const { name, accessToken } = useAppSelector(state => state.auth)

    return {
        login: ( params: { accessToken: string }) => dispatch(login(params)),
        logout: () => dispatch(logout()),
        initUser: () => dispatch(initUser()),
        name,
        accessToken
    }
}