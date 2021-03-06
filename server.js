let express = require("express");
let mongoose = require("mongoose");
let mongoURI = require("./Config/keys");
let path = require("path");
let routeController = require("./Controller/routeController");

let app = express();

// Body Parser
app.use(express.urlencoded({ extended : false}));
app.use(express.json());

// Connection To MongoDB Atlas
mongoose.connect(mongoURI.mongoURI , {useNewUrlParser : true})
    .then(() => {
        console.log("Connected To MongoDB")
    })
    .catch((err) => {
        console.log("Opps! Error Occoured: " + err)
    })


// Setting Routes
app.use("/api/books" , routeController);


// Server static files in production
if(process.env.NODE_ENV === "production"){
    //Set static folder
    app.use(express.static("View/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname , "View" , "build" , "index.html"));
    })
}


// Server Port
const port = process.env.PORT || 5000;
app.listen(port , () => {
    console.log("Listening To Port 5000")
})