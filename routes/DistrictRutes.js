const express = require("express");
const district = express.Router();
const Storage = require("../models/FormData");


district.get("/:district", async (req, res) => {
  try {
    const districttype = req.params.district;
    console.log(districttype);

    const data = await Storage.find({ district: districttype });
    if (!data) {
      res.status(500).json({
        message: "No data found",
      });
    } 0
    console.log("data fatch");
    res.status(200).json(data);
    console.log(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = district;