// 1 load the .env file : it is given first to load it first since the authincation has to be done btw the server and the clinet berfore any thing
require('dotenv').config();
// import the express framwork
const express = require('express')
// import cors to connect between the server host and client host
const cors =require('cors')
//import the router
const router = require('./Router/router')
// create a server using express
const server = express()
// create a port for the server to run :4000
const PORT = 4000

// middlewares for the server
server.use(cors())
server.use(express.json())
server.use(router)
// Db connection
const DB = require('./DB/connections')
// default API port
server.get('/',(req,res)=>{
    res.status(200).send(`Welcome to the Server , PORT is ${PORT}`)
})

// listening the server
server.listen((PORT),()=>{
    console.log(`The server is listening in the PORT:${PORT}`);
})
