import { useCallback, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../modules/auth/hooks/useAuth'
import { ROUTES } from '../../../router/routes'

export const PanelLayout = () => {
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
    <div className='panel-container'>
      <pre className='access-token-panel'>AccessToken: {accessToken}</pre>
        <button onClick={handleLogout}>Logout</button>
      <Outlet />
    </div>
  )
}