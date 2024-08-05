import { useCallback, useEffect } from "react"
import { Outlet, useNavigate } from "react-router"
import { ROUTES } from "../../../../../router/routes"
import { useAuth } from "../../../../auth/hooks/useAuth"

export const Logout = () => {
    const navigate = useNavigate()
    const { accessToken, initUser, logout } = useAuth()
  
    const handleLogout = useCallback(() => {
      logout()
  
      navigate({
        pathname: ROUTES.auth.login.path
      })
    }, [logout, navigate])
  
    useEffect(() => {
      if (accessToken) {
        initUser()
      } else {
        handleLogout()
      }
    }, [accessToken, handleLogout, initUser])
  
    return (
      <div>
            <button className="p-link layout-topbar-button" onClick={handleLogout}>
                <i className="pi pi-power-off"></i>
            </button>
      </div>
    )
}

