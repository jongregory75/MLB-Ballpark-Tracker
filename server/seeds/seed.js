const db = require("../config/connection");
const { BarInfo } = require("../models");
const { BallPark } = require("../models");
const { InsidePark } = require("../models");

const ballParkData = require("./ballParkData.json");
const barInfoData = require("./barInfoData.json");
const insideParkData = require("./insideParkData.json");

db.once("open", async () => {
  await BallPark.deleteMany({});
  await BarInfo.deleteMany({});
  await InsidePark.deleteMany({});

  const ballParks = await BallPark.insertMany(ballParkData);
  const barInfo = await BarInfo.insertMany(barInfoData);
  const insidePark = await InsidePark.insertMany(insideParkData);

  console.log("BallParks seeded!");
  process.exit(0);
});
