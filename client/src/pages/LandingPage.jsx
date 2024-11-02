import React from 'react'
import DarkModeSwitcher from '../components/DarkModeSwitcher'

const LandingPage = () => {
  return (
    <div className='w-full h-[100vh] dark:bg-black dark:text-white flex items-center justify-center' >
        <h1 className="heading-l flex gap-4 items-center">
        LandingPage
        <DarkModeSwitcher/>
        </h1>
    </div>
  )
}

export default LandingPage