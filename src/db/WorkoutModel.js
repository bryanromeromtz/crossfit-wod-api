const DB = require("./DB.json");
const { saveToDB } = require("./utils");

const getAllWorkouts = (filter) => {
  try {
    let workouts = DB.workouts;

    if (filter?.mode) {
      return workouts.filter((workout) =>
        workout.mode.toLowerCase().includes(filter.mode.toLowerCase())
      );
    }
    return workouts;
  } catch (err) {
    throw {
      status: 500,
      message: err?.message || "Internal server error",
    };
  }
};

const createWorkout = (newWorkout) => {
  const isWorkoutExist = DB.workouts.find(
    (workout) => workout.name === newWorkout.name
  );
  if (isWorkoutExist) {
    throw {
      status: 400,
      message: `Workout with name ${newWorkout.name} already exists`,
    };
  }

  try {
    DB.workouts.push(newWorkout);
    saveToDB(DB);
    return newWorkout;
  } catch (err) {
    throw {
      status: 500,
      message: err?.message || "Internal server error",
    };
  }
};

const getWorkout = (id) => {
  const workout = DB.workouts.find((workout) => workout.id === id);
  if (!workout) {
    throw new Error("Workout not found");
  }
  return workout;
};

const updateWorkout = (id, workout) => {
  const index = DB.workouts.findIndex((workout) => workout.id === id);
  if (index === -1) {
    throw new Error("Workout not found");
  }
  DB.workouts[index] = workout;
  saveToDB(DB);
  return workout;
};

const deleteWorkout = (id) => {
  const index = DB.workouts.findIndex((workout) => workout.id === id);
  if (index === -1) {
    throw new Error("Workout not found");
  }
  DB.workouts.splice(index, 1);
  saveToDB(DB);
  return "Workout deleted";
};

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
