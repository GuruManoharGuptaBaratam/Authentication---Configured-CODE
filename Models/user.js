const mongoose = require('mongoose')

const USER_schema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
},{timestamps: true})

const USER = mongoose.model("user",USER_schema)

module.exports = USER