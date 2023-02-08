const recordService = require("../services/recordService");

const getRecordsForWorkout = async (req, res) => {
  const { workoutId } = req.params;

  if (!workoutId) {
    throw {
      status: 400,
      message: "Workout id is required",
    };
  }

  try {
    const record = await recordService.getRecordsForWorkout(workoutId);
    res.status(200).json(record);
  } catch (err) {
    res.status(err.status || 500).json({
      message: err.message || "Internal server error",
    });
  }
};

module.exports = {
  getRecordsForWorkout,
};
