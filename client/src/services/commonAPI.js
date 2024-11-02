// API configuration 
// const axios = require('axios')
import axios from 'axios'

// APi fetch configuration => get ,put , post ,delete
export const commonAPI = async(httpMethod,url,reqBody)=>{
    let reqConfig ={
        method:httpMethod,
        url,
        data:reqBody
    }
    return await axios(reqConfig).then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}