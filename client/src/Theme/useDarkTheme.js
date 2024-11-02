//  custom hook for the darkmode 
import React, { useEffect, useState } from 'react'

const useDarkTheme = () => {
    // load theme from localstorage, default to light mode
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode')
        return savedTheme ? JSON.parse(savedTheme) : "false"
    })

    // setting a useeffect for work the darkmode function to apply as isDarkMode state changes 
    useEffect(() => {
        // setting up a function for adding the dark class to the Html as the IsDarkMode State
        isDarkMode ?
            // if isDarkMode is true then
            document.documentElement.classList.add("dark")
            :
            // if isDarkMode is false then
            document.documentElement.classList.remove("dark")
    },[isDarkMode])

    // set the state of the dark mode as isDarkMode
    localStorage.setItem("darkMode",isDarkMode)

    // returning the state of darkmode
    return [isDarkMode, setIsDarkMode]
}

export default useDarkTheme