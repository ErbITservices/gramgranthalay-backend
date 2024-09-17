const express = require("express");
const Motibhaiamin1rutes = express.Router();
const Motibhaiamin = require("../models/Motibhaiamin");

Motibhaiamin1rutes.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Motibhaiamin(data);
    const savedPerson = await newPerson.save();
    console.log("data save");
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



Motibhaiamin1rutes.get("/", async (req, res) => {
  try {
    const data = await Motibhaiamin.find();
    console.log("data fatch");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = Motibhaiamin1rutes;
