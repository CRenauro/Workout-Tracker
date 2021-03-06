const {pathToFileURL} = require("url");
const path = require("path");

const router = require("express").Router();

router.get("/", (req,res) => {
    console.log("GET /")
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});



module.exports = router;