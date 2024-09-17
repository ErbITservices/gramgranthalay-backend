const express = require("express");
const Motibhaiamin5rutes = express.Router();
const Motibhaiamin5 = require("../models/Motibhaiamin5");

Motibhaiamin5rutes.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Motibhaiamin5(data);
    const savedPerson = await newPerson.save();
    console.log("data save");
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

Motibhaiamin5rutes.put("/:uid", async (req, res) => {
  try {
    const personId = req.params.uid;
    console.log(personId);

    const updateField = req.body;
    console.log(updateField);

    const data = await Motibhaiamin5.find({ uid: personId });
    const response = await Motibhaiamin5.findByIdAndUpdate(data, updateField, {
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

Motibhaiamin5rutes.get("/", async (req, res) => {
  try {
    const data = await Motibhaiamin5.find();
    console.log("data fatch");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = Motibhaiamin5rutes;
