const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiTWFuYWdlciIsImlhdCI6MTU4NzI1NjIzNCwiZXhwIjoxNTg3MjU5ODM0fQ.-Nf7Jdh3nnCvJnROXUPcbGeu12402mC6OiWNsBV3ixo
const Manager = require("../models/Manager");//creat



router.post("/", (req, res, next) => {
  const manager = new Manager();
  manager.name = req.body.name;
  manager.email= req.body.email;
  manager.password= req.body.password;
  manager.save().then(
    () => {
        res.status(201).json({
          message: "manager added successfully",
        });
    });

});
router.get("/", (req, res, next) => {

  Manager.find({}, function (err, data) {
    if (err) {
      console.log("err")
    }
    else {
      res.status(200).json({
        message: "Posts fetched successfully!",
        manegers: data
      });
    }
  }
  );
});

router.delete("/:id", (req, res, next) => {
  Manager.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Manager deleted!" });
  });
});

module.exports = router;
