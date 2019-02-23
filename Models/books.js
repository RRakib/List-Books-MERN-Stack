let mongoose = require("mongoose");

// Author Schema
let authorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    }
})

// Books Schema
let bookSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    author : authorSchema
})

// Model / Collections
let books = new mongoose.model("books" , bookScheme);


module.exports = books;