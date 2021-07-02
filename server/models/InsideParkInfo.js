const { Schema, model } = require("mongoose");

const insideParkSchema = new Schema({
  franchise_code: {
    type: String,
  },
  menu_1: {
    type: String,
  },
  menu_2: {
    type: String,
  },
  menu_3: {
    type: String,
  },
});

const InsideParkInfo = model("InsideParkInfo", insideParkSchema);

module.exports = InsideParkInfo;

//comment
