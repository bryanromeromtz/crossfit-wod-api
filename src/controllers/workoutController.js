const workoutService = require("../services/workoutService");

const getAllWorkouts = async (req, res) => {
  const { mode } = req.query;
  const allWorkouts = await workoutService.getAllWorkouts({ mode });
  res.send({
    status: "success",
    data: {
      workouts: allWorkouts,
    },
  });
};

const createWorkout = async (req, res) => {
  const { name, mode, equipment, exercises, trainerTips } = req.body;
  if (!name || !mode || !equipment || !exercises || !trainerTips) {
    res.status(400).json({
      status: "fail",
      message: {
        error: "Missing required fields",
      },
    });
  }

  const newWorkout = {
    name,
    mode,
    equipment,
    exercises,
    trainerTips,
  };

  try {
    const createdWorkout = await workoutService.createWorkout(newWorkout);
    res.status(201).json({
      status: "successfully created",
      data: {
        workout: createdWorkout,
      },
    });
  } catch (err) {
    res.status(err?.status || 500).json({
      status: "fail",
      message: err?.message || "Internal server error",
    });
  }
};

const getWorkout = async (req, res) => {
  try {
    const workout = await workoutService.getWorkout(req.params.id);
    if (!req.params.id) {
      throw new Error("Missing required fields");
    }

    res.status(200).json({
      status: "success",
      data: {
        workout,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

const updateWorkout = async (req, res) => {
  const { name, mode, equipment, exercises, trainerTips } = req.body;
  if (!name || !mode || !equipment || !exercises || !trainerTips) {
    res.status(400).json({
      status: "fail",
      message: {
        error: "Missing required fields",
      },
    });
  }

  const workoutToUpdate = {
    name,
    mode,
    equipment,
    exercises,
    trainerTips,
  };

  try {
    const updatedWorkout = await workoutService.updateWorkout(
      req.params.id,
      workoutToUpdate
    );
    res.status(200).json({
      status: "success",
      data: {
        workout: updatedWorkout,
      },
    });
  } catch (err) {
    res.status(err?.status || 500).json({
      status: "fail",
      message: err?.message || "Internal server error",
    });
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const workoutToDelete = await workoutService.deleteWorkout(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        workout: workoutToDelete,
      },
    });
  } catch (err) {
    res.status(err?.status || 500).json({
      status: "fail",
      message: err?.message || "Internal server error",
    });
  }
};

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
};
