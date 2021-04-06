const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

//bring in mongoose.connect
mongoose.connect(process.env.MONGOOSE_URI || "mongodb://localhost/fitness", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindandModify: false,
});

//declare routes
const api = require('./routes/api');
const html = require('./routes/html');

// declare api routes
api.use(api);
api.use(html);


app.listen(PORT, () => {
    console.log(`My app is runnning on ${PORT}`);
});


