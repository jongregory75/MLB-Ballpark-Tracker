const db = require("../config/connection");
const { BarInfo } = require("../models");
const { BallPark } = require("../models");

const ballParkData = require("./ballParkData.json");
//TODO Uncomment line 7 once we have working BarInfo JSON
// const barInfoData = require("./barInfoData.json");

db.once("open", async () => {
  await BallPark.deleteMany({});
  //TODO Uncomment line 12 once we have working BarInfo JSON
  // await BarInfo.deleteMany({});

  const ballParks = await BallPark.insertMany(ballParkData);
  //TODO Uncomment line 16 once we have working BarInfo JSON
  // const barInfo = await BarInfo.insertMany(barInfoData);

  console.log("BallParks seeded!");
  process.exit(0);
});
