const express = require("express");
const Motibhaiamin7rutes = express.Router();
const Motibhaiamin7 = require("../models/Motibhaiamin7");

Motibhaiamin7rutes.post("/", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    const newPerson = new Motibhaiamin7(data);
    const savedPerson = await newPerson.save();
    console.log("data save");
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

Motibhaiamin7rutes.get("/:lname", async (req, res) => {
  try {
    const lnametype = req.params.lname;
    console.log(lnametype);

    const data = await Motibhaiamin7.find({ lname: lnametype });
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
Motibhaiamin7rutes.get("/", async (req, res) => {
  try {
    const data = await Motibhaiamin7.find();
    console.log("data fatch");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

Motibhaiamin7rutes.get("/:lname", async (req, res) => {
  try {
    const { lname } = req.params;

    const data = await Motibhaiamin7.findOne({ lname: lname });
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
Motibhaiamin7rutes.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updateField = req.body;
    const data = await Motibhaiamin7.findOne({ _id: personId });
    const response = await Motibhaiamin7.findByIdAndUpdate(data, updateField, {
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
Motibhaiamin7rutes.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
                  await Motibhaiamin7.findByIdAndDelete(personId);

    // const data = await Motibhaiamin7.findOne({ _id: personId });

    // const reminder = await Motibhaiamin7.findOneAndDelete(data);
    // if (!reminder) {
    //   return res.status(404).json({ message: "No Menu with this ID" });
    // }
    console.log("data deleted");
    res.status(200).json({ message: "person deleted success" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = Motibhaiamin7rutes;
