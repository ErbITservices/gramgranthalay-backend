const mongoose = require("mongoose");

const Motibhaiamin2Schema = new mongoose.Schema({
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

const Motibhaiamin2 = mongoose.model("Motibhaiamin2", Motibhaiamin2Schema);

module.exports = Motibhaiamin2;
