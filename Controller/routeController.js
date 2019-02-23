let books = require("../Models/books");
let express = require("express");
let routes = express.Router();


// Get Request
routes.get("/" , (req, res) => {
    books.find({}, (err , data) => {
        if(err){ throw err };
        res.send(data)
    })
})

// Post Request
routes.post("/" , (req, res) => {
    books(req.body).save()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        console.log(err)
    })
})

// Delete Request
routes.delete("/:id" , (req ,res) => {
    books.findOneAndDelete({ _id : req.params.id})
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})

module.exports = routes