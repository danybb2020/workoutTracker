const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT =  3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))


mongoose.connect( "mongodb://localhost/wtracker", {
    useNewUrlParser: true,
    useFindAndModify: false, 
});

app.use(require(".roures/api.js"));
app.use(require(".roures/views.js"));



app.listen(PORT, () => {
    console.log(`------- App running on port ${PORT}!`);
});




