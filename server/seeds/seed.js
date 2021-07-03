const db = require("../config/connection");
const { BarInfo } = require("../models");
const { BallPark } = require("../models");

const ballParkData = require("./ballParkData.json");
const barInfoData = require("./barInfoData.json");

db.once("open", async () => {
  await BallPark.deleteMany({});
  await BarInfo.deleteMany({});

  const ballParks = await BallPark.insertMany(ballParkData);
  const barInfos = await BarInfo.insertMany(barInfoData);
  console.log("BallParks seeded!");
  process.exit(0);
});
