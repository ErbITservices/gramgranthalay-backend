const express = require("express");
const Countroute = express.Router();
const Storage = require("../models/FormData");
const Count = require("../models/count");

Countroute.post("/Count", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Count(data);
    const savedPerson = await newPerson.save();
    console.log("data save");
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

Countroute.put("/:count", async (req, res) => {
  try {
    const personId = req.params.count;
    console.log(personId);
    
    const updateField = req.body;
    console.log(updateField);
    
    const data = await Count.find({ count: personId });
    const response = await Count.findByIdAndUpdate(data, updateField, {
      new: true,
      runValidators: true,
    });
    console.log("data updated");
    res.status(200).json(response);

    if (!response) {
      return res.status(404).json({ message: "Person not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

Countroute.get("/Count", async (req, res) => {
  try {
    const data = await Count.find();
    console.log("data fatch");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = Countroute;
