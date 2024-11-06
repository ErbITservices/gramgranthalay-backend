const mongoose = require("mongoose");

const Motibhaiamin1Schema = new mongoose.Schema({
  lname: {
    type: String,
    // required: true,
  },
  jillo: {
    type: String,
    // required: true,
  },
  taluko: {
    type: String,
    // required: true,
  },
  district: {
    type: String,
    // required: true,
  },
  currentyear: {
    type: String,
    // required: true,
  },
  finacialyear: {
    type: String,
    // required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});

const Motibhaiamin1 = mongoose.model("Motibhaiamin1", Motibhaiamin1Schema);

module.exports = Motibhaiamin1;
