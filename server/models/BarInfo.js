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
  menuItemImage: {
    type: Blob,
  },
});

const Tech = model("Tech", techSchema);

module.exports = Tech;
