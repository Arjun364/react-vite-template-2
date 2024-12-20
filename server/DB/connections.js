const mongoose = require('mongoose') // importing the mongoose
const connectionString = process.env.connectionString // imported the connection string

// connection to the database
mongoose.connect(connectionString).then((res)=>{
    console.log(`The server is connected to the mongoDB`);  
}).catch((err)=>{
    console.log(`Mongoose Err :${err}`);
})