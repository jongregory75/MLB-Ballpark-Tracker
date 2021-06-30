const { Schema, model } = require("mongoose");

const insideParkSchema = new Schema({
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

const insideParkInfo = model("insideParkInfo", insideParkSchema);

module.exports = insideParkInfo;
