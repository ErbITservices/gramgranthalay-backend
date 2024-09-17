const express = require("express");
const Motibhaiamin3rutes = express.Router();
const Motibhaiamin3 = require("../models/Motibhaiamin3");

Motibhaiamin3rutes.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Motibhaiamin3(data);
    const savedPerson = await newPerson.save();
    console.log("data save");
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

Motibhaiamin3rutes.put("/:uid", async (req, res) => {
  try {
    const personId = req.params.uid;
    console.log(personId);

    const updateField = req.body;
    console.log(updateField);

    const data = await Motibhaiamin3.find({ uid: personId });
    const response = await Motibhaiamin3.findByIdAndUpdate(data, updateField, {
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

Motibhaiamin3rutes.get("/", async (req, res) => {
  try {
    const data = await Motibhaiamin3.find();
    console.log("data fatch");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = Motibhaiamin3rutes;
