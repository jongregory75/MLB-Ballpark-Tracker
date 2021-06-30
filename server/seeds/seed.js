const db = require("../config/connection");
const { BarInfo } = require("../models");
const { BallPark } = require("../models");
const { VisitedParks } = require("../models");

const ballParkData = require("./ballParkData.json");
const visitedParkData = require("./visitedParkData.json");

db.once("open", async () => {
  await BallPark.deleteMany({});
  await VisitedParks.deleteMany({});

  const ballParks = await BallPark.insertMany(ballParkData);
  const visitedParks = await VisitedParks.insertMany(visitedParkData);

  console.log("BallParks seeded!");
  process.exit(0);
});
