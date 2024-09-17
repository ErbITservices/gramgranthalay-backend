const mongoose = require("mongoose");

const Motibhaiamin3Schema = new mongoose.Schema({
  lname: {
    type: String,
    // required: true,
  },
  gam: {
    type: String,
    // required: true,
  },
  uid: {
    type: String,
    // required: true,
  },
  currentyear: {
    type: String,
    // required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});

const Motibhaiamin3 = mongoose.model("Motibhaiamin3", Motibhaiamin3Schema);

module.exports = Motibhaiamin3;
