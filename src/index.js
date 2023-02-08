const express = require("express");
const v1WorkoutRouter = require("./V1/routes/workoutRoutes");
const apicache = require("apicache");
const app = express();
const PORT = process.env.PORT || 3000;
const cache = apicache.middleware;

app.use(express.json());
app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

// console ninja
console.log(PORT);
