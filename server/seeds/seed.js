const db = require("../config/connection");
const { BarInfo } = require("../models");
const { BallPark } = require("../models");

const ballParkData = require("./ballParkData.json");
db.once("open", async () => {
  await BallPark.deleteMany({});
  const ballParks = await BallPark.insertMany(ballParkData);
  console.log("BallParks seeded!");
  process.exit(0);
});
