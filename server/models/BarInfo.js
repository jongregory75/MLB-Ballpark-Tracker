const { Schema, model } = require("mongoose");

//TODO build out BarInfo schema based on Yelp api?
const barInfoSchema = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  topMenuItem: {
    type: String,
  },
});

const BarInfo = model("BarInfo", barInfoSchema);

module.exports = BarInfo;
