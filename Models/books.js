let mongoose = require("mongoose");

// Books Schema
let bookSchema = new mongoose.Schema({
    book : {
        type : String,
        required : true
    }
})

// Model / Collections
let books = mongoose.model("books" , bookSchema);


module.exports = books;