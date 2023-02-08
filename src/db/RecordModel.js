const DB = require("./DB.json");

const getRecordsForWorkout = (workoutId) => {
  try {
    const record = DB.records.find((record) => record.workout === workoutId);
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
