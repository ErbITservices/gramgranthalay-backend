const express=require('express');
const formRouter = express.Router();
const Storage = require('../models/FormData')

formRouter.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newPerson = new Storage (data);
      const savedPerson = await newPerson.save();
      console.log("data save");
      res.status(200).json(savedPerson);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  formRouter.get('/', async (req, res) => {
    try {
      const data = await Storage.find();
      console.log('data fatch');
      res.status(200).json(data);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  // formRouter.get('/:gam', async (req, res) => {
  //   try {
  //     const gamtype = req.params.gam;
  //     console.log(gamtype);
      
  //       const data = await Storage.find({gam:gamtype});
  //     console.log('data fatch');
  //     res.status(200).json(data);
  //     console.log(data);
      
      
     
  
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
  // });

  formRouter.delete("/:uid", async (req, res) => {
    try {
      const personId = req.params.uid;
      const reminder = await Storage.findOneAndDelete(personId);
      if (!reminder) {
        return res.status(404).json({ message: "No Menu with this ID" });
      }
      console.log("data deleted");
      res.status(200).json({ message: "person deleted success" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  formRouter.delete("/:uid", async (req, res) => {
    try {
      const personId = req.params.uid;
      const data = await Storage.find({ uid: personId });

      const reminder = await Storage.findOneAndDelete(data);
      if (!reminder) {
        return res.status(404).json({ message: "No Menu with this ID" });
      }
      console.log("data deleted");
      res.status(200).json({ message: "person deleted success" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  formRouter.put("/:uid", async (req, res) => {
    try {
      const personId = req.params.uid;
      const updateField = req.body;
      const data = await Storage.find({ uid: personId });
      const response = await Storage.findByIdAndUpdate(data, updateField, {
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
  // formRouter.get("/:district", async (req, res) => {
  //   try {
  //     const data = await Storage.find({ district: req.params.district });
  //     if (!data) {
  //       res.status(500).json({
  //         message: "No data found",
  //       });
  //     }
  //     res.status(200).json(data);
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
  // });
  
  formRouter.get("/:uid", async (req, res) => {
    try {
      const uidtype = req.params.uid;
      console.log(uidtype);

      const data = await Storage.find({ uid: uidtype });
      if (!data) {
        res.status(500).json({
          message: "No data found",
        });
      }
      console.log("data fatch");
      res.status(200).json(data);
      console.log(data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = formRouter;
