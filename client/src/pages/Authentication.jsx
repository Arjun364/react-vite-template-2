import React from 'react'
import Login from '../components/Auth/Login'
import Registration from '../components/Auth/Registration'

const Authentication = ({signin}) => {
  return (
    <div className='w-full min-h-[100vh] flex items-center justify-center'>
          {signin?<Login/>:<Registration/>}
    </div>
)
}

export default Authentication