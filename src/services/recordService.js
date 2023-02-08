const Record = require("../db/RecordModel");

const getRecordsForWorkout = async (workoutId) => {
  try {
    const record = await Record.getRecordsForWorkout(workoutId);
    if (!record) {
      throw {
        status: 404,
        message: `Workout with id ${workoutId} not found`,
      };
    }
    return record;
  } catch (err) {
    throw {
      status: err?.status || 500,
      message: err?.message || "Internal server error",
    };
  }
};

module.exports = {
  getRecordsForWorkout,
};
