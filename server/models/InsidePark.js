const { Schema, model } = require("mongoose");

const insideParkSchema = new Schema({
  franchise_code: {
    type: String,
  },
  name_display_long: {
    type: String,
  },
  menu_1: {
    type: String,
  },
  menu_1_loc_name: {
    type: Array,
  },
  menu_1_loc_section: {
    type: Array,
  },
  menu_1_image: {
    type: String,
  },
  menu_2: {
    type: String,
  },
  menu_2_loc_name: {
    type: Array,
  },
  menu_2_loc_section: {
    type: Array,
  },
  menu_2_image: {
    type: String,
  },
  menu_3: {
    type: String,
  },
  menu_3_loc_name: {
    type: Array,
  },
  menu_3_loc_section: {
    type: Array,
  },
  menu_3_image: {
    type: String,
  },
});

const InsidePark = model("InsidePark", insideParkSchema);

module.exports = InsidePark;

//comment
