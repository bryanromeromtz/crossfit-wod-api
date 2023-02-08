const express = require("express");
const apicache = require("apicache");
const {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../../controllers/workoutController");
const { getRecordsForWorkout } = require("../../controllers/recordController");

const router = express.Router();
const cache = apicache.middleware;

router
  .get("/", cache("2 minutes"), getAllWorkouts)
  .get("/:id", getWorkout)
  .get("/:workoutId/records", getRecordsForWorkout)
  .post("/", createWorkout)
  .put("/:id", updateWorkout)
  .delete("/:id", deleteWorkout);

module.exports = router;
