const router = require("express").Router();
const Workout = require("../models/workout");
const mongoose = require("mongoose");
const express = require("express");


router.post("/api/workout", ({ body }, res) => {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

router.put("/api/workout/:id", (req, res) => {
  console.log(`req.body: ${JSON.stringify(req.body)}`);
  Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        exercises: req.body
      }
    }
  )
  .then((dbWorkout) => {
    console.log(dbWorkout);
    res.json(dbWorkout);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.get("/api/workout", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch ((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workout/range", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/api/workout", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(()=> {
        return res.json(true);
    })
    .catch((err) => {
        res.json(400).json(err);
    });
});

module.exports = router;