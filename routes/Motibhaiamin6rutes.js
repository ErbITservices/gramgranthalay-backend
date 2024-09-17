const express = require("express");
const Motibhaiamin6rutes = express.Router();
const Motibhaiamin6 = require("../models/Motibhaiamin6");

Motibhaiamin6rutes.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Motibhaiamin6(data);
    const savedPerson = await newPerson.save();
    console.log("data save");
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

Motibhaiamin6rutes.put("/:uid", async (req, res) => {
  try {
    const personId = req.params.uid;
    console.log(personId);

    const updateField = req.body;
    console.log(updateField);

    const data = await Motibhaiamin6.find({ uid: personId });
    const response = await Motibhaiamin6.findByIdAndUpdate(data, updateField, {
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

Motibhaiamin6rutes.get("/", async (req, res) => {
  try {
    const data = await Motibhaiamin6.find();
    console.log("data fatch");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = Motibhaiamin6rutes;
