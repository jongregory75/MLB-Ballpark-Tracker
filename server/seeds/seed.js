const db = require("../config/connection");
const { BarInfo } = require("../models");
const { BallPark } = require("../models");
const { InsideParkInfo } = require("../models");

const ballParkData = require("./ballParkData.json");
const insideParkData = require("./insideParkData.json");
const barInfoData = require("./barInfoData.json");

db.once("open", async () => {
  await BallPark.deleteMany({});
  await InsideParkInfo.deleteMany({});
  await BarInfo.deleteMany({});

  const ballParks = await BallPark.insertMany(ballParkData);
  const insideParkInfo = await InsideParkInfo.insertMany(insideParkData);
  const barInfo = await BarInfo.insertMany(barInfoData);

  console.log("BallParks seeded!");
  process.exit(0);
});
