const mongoose = require("mongoose");

const Motibhaiamin4Schema = new mongoose.Schema({
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

const Motibhaiamin4 = mongoose.model("Motibhaiamin4", Motibhaiamin4Schema);

module.exports = Motibhaiamin4;
