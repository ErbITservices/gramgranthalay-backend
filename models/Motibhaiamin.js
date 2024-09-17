const mongoose = require("mongoose");

const MotibhaiaminSchema = new mongoose.Schema({
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
  marks: {
    type: Number,
    required: true,
  },
});

const Motibhaiamin = mongoose.model("Motibhaiamin", MotibhaiaminSchema);

module.exports = Motibhaiamin;
