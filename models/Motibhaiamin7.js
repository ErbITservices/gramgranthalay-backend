const mongoose = require("mongoose");

const Motibhaiamin7Schema = new mongoose.Schema({
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

const Motibhaiamin7 = mongoose.model("Motibhaiamin7", Motibhaiamin7Schema);

module.exports = Motibhaiamin7;
