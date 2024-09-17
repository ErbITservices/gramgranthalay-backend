const mongoose = require("mongoose");

const Motibhaiamin5Schema = new mongoose.Schema({
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

const Motibhaiamin5 = mongoose.model("Motibhaiamin5", Motibhaiamin5Schema);

module.exports = Motibhaiamin5;
