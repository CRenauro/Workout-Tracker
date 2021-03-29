const router = require("express").Router();
const Workout = require("../models/workout");


router.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

///get workouts by ID

///aggregate for duration and range (look up .aggregate for mongoose)



  router.delete("/api/workouts", ({ body }, res) => {
      Workout.findByIdAndDelete(body.id)
      .then(()=> {
          return res.json(true);
      })
      .catch((err) => {
          res.json(400).json(err);
      });
  })