import { Outlet } from 'react-router-dom'


import AppTopbar from '../../../modules/panel/dashboard/pages/context/Apptopbar'

export const PanelLayout = () => {


  return (
    <div className='panel-container'>
      <AppTopbar />
        <Outlet />
    </div>
  )
}