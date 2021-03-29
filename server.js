const mongoose = require("mongoose");
const express = require("express");

const PORT = 3000

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

//bring in mongoose.connect

//declare routes

//declare api routes

app.listen(PORT, () => {
    console.log(`My app is runnning on ${PORT}`);
});


mongodb+srv://mongo:mongo@cluster0.tn9ax.mongodb.net/fitness?retryWrites=true&w=majority