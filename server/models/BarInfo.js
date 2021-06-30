const { Schema, model } = require("mongoose");

//TODO build out BarInfo schema based on Yelp api?
const barInfoSchema = new Schema({
  franchise_code: {
    type: String,
  },
  venue_name_1: {
    type: String,
  },
  venue_add_1: {
    type: String,
  },
  venue_rating_1: {
    type: Number,
  },
  venue_name_2: {
    type: String,
  },
  venue_add_2: {
    type: String,
  },
  venue_rating_2: {
    type: Number,
  },
  venue_name_3: {
    type: String,
  },
  venue_add_3: {
    type: String,
  },
});

const BarInfo = model("BarInfo", barInfoSchema);

module.exports = BarInfo;
