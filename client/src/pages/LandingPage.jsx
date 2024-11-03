import React from 'react'
import DarkModeSwitcher from '../components/DarkModeSwitcher'
import { motion } from "framer-motion"

const LandingPage = () => {
  return (
    <div className='w-full h-[100vh] dark:bg-black dark:text-white flex items-center justify-center' >
      <motion.h1
        whileHover={{ scale: 1.2 }}
        className="heading-l flex gap-4 items-center">
        LandingPage
        <DarkModeSwitcher />
      </motion.h1>
    </div>
  )
}

export default LandingPage