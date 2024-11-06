const express = require("express");
const Motibhaiamin1rutes = express.Router();
// const Motibhaiamin = require("../models/Motibhaiamin");
const Motibhaiamin1 = require("../models/Motibhaiamin1");

Motibhaiamin1rutes.post("/", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    
    const newPerson = new Motibhaiamin1(data);
    const savedPerson = await newPerson.save();
    console.log("data save");
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



Motibhaiamin1rutes.get("/:lname", async (req, res) => {
  try {
    const lnametype = req.params.lname;
    console.log(lnametype);

    const data = await Motibhaiamin1.find({ lname: lnametype });
    if (!data) {
      res.status(500).json({
        message: "No data found",
      });
    }
    0;
    console.log("data fatch");
    res.status(200).json(data);
    console.log(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
Motibhaiamin1rutes.get("/", async (req, res) => {
  try {
    const data = await Motibhaiamin1.find();
    console.log("data fatch");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = Motibhaiamin1rutes;
