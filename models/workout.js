const mongoose = require("mongoose");
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now(),
    },
    exercises: [
        {
            type: {
            type: String,
            trim: true,
            required: "Enter an exercise",
        },
        name: {
            type: String,
            trim: true,
            required: "Enter an exercise name",
        },
        duration: {
            type: Number,
            required: "Enter the duration",
        },
        weight: {
            type: Number,
        },
    },
],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;