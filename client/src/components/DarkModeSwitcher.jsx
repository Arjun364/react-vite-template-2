import React from 'react'
import useDarkTheme from '../Theme/useDarkTheme'
import { FaSun,FaMoon  } from "react-icons/fa6";

const DarkModeSwitcher = () => {
    const [isDark,setIsDark]=useDarkTheme()
  return (
    <div className={`cursor-pointer transition-all ease-linear duration-150 inline-block ${isDark?"hover:text-orange-400":"hover:text-blue-400"}`} onClick={()=>setIsDark(!isDark)}>
        {isDark?<FaSun/>:<FaMoon/>}
    </div>
  )
}

export default DarkModeSwitcher