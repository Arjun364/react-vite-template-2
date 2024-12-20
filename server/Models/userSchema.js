const mongoose = require('mongoose') // import the mongoose
// structure of the userschema
const userSchema = new mongoose.Schema({

})
// declare the structure
const users = mongoose.model('users',userSchema)
module.exports = users