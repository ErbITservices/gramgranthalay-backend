const mongoose = require("mongoose");

const Motibhaiamin6Schema = new mongoose.Schema({
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

const Motibhaiamin6 = mongoose.model("Motibhaiamin6", Motibhaiamin6Schema);

module.exports = Motibhaiamin6;
