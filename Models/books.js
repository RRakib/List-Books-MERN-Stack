let mongoose = require("mongoose");

// Author Schema
let authorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    age : {
        type : Number,
        required : true
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
let books = mongoose.model("books" , bookSchema);


module.exports = books;