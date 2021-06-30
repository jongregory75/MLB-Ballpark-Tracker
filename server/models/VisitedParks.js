const { Schema, model } = require("mongoose");

const visitedParkSchema = new Schema({
  VisitedParks: {
    type: Array,
  },
});

const VisitedParks = model("VisitedParks", visitedParkSchema);

module.exports = VisitedParks;
