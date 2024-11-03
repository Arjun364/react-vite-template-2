import React, { useState } from 'react'
import DarkModeSwitcher from '../components/DarkModeSwitcher'
import { motion } from "framer-motion"



const HomePage = () => {
    return (
        <div className='w-full h-[100vh] dark:bg-black dark:text-white flex flex-col items-center justify-center' >
            <motion.h1
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                initial={{ x: 0 }}
                className="heading-l flex gap-4 items-center">
                HomePage
                <DarkModeSwitcher />
            </motion.h1>
        </div>
    )
}

export default HomePage