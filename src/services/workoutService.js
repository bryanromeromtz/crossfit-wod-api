const { v4: uuidv4 } = require("uuid");
const WorkoutModel = require("../db/WorkoutModel");

const getAllWorkouts = async (filter) => {
  const allWorkouts = await WorkoutModel.getAllWorkouts(filter);
  return allWorkouts;
};

const createWorkout = async (workout) => {
  const workoutToCreate = {
    ...workout,
    id: uuidv4(),
    createdAt: new Date().toISOString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toISOString("en-US", { timeZone: "UTC" }),
  };
  const createdWorkout = await WorkoutModel.createWorkout(workoutToCreate);
  return createdWorkout;
};

const getWorkout = async (id) => {
  const workout = await WorkoutModel.getWorkout(id);
  return workout;
};

const updateWorkout = async (id, workout) => {
  const workoutToUpdate = {
    ...workout,
    id,
    updatedAt: new Date().toISOString("en-US", { timeZone: "UTC" }),
  };
  const updatedWorkout = await WorkoutModel.updateWorkout(id, workoutToUpdate);
  return updatedWorkout;
};

const deleteWorkout = async (id) => {
  const workoutToDelete = await WorkoutModel.deleteWorkout(id);
  return workoutToDelete;
};

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
