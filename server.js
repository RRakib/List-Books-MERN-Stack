let express = require("express");
let mongoose = require("mongoose");
let mongoURI = require("./Config/keys");

let app = express();

// Body Parser
app.set(express.urlencoded({ extended : false}));
app.use(express.json());

// Connection To MongoDB Atlas
mongoose.connect(mongoURI.mongoURI , {useNewUrlParser : true})
    .then(() => {
        console.log("Connected To MongoDB")
    })
    .catch((err) => {
        console.log("Opps! Error Occoured: " + err)
    })


app.get("/" , (req, res) => {
    res.send("Hello")
})


// Server Port
const port = process.env.PORT || 5000;
app.listen(port , () => {
    console.log("Listening To Port 5000")
})