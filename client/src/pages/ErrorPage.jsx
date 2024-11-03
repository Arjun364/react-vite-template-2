import React from 'react'
import {useNavigate} from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full h-[100vh] flex flex-col items-center justify-center gap-2 dark:bg-black dark:text-white px-[1rem]'>
            <h1 className="heading-l text-center">Oops! Something went wrong.</h1>
            <p className='text-center text-sm md:text-base'>The page you are looking for does not exist or you do not have permission to access it.</p>
            <button className='btn max-w-[10rem]' onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    )
}

export default ErrorPage