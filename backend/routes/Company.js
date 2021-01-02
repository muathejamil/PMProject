const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Company = require("../models/Company");//when rigestration,get,add,
const Manager = require("../models/Manager");//when rigestration,get,add,
//1-return company projects
router.post("/", (req, res, next) => {
  const company = new Company();
  company.name = req.body.name;
  company.discription=req.body.discription,
  company.Manager = req.body.Manager;
  company.Managers.push(req.body.Manager);
  company.save().then( ()=>{
    Manager.findOneAndUpdate({ _id: req.body.Manager},{company:company._id}).then(()=>{
      res.status(200).json({
      message: "company created successfully!",
      id:company._id
    })

  })})

});
router.get("/:id", (req, res, next) => {
  Company.findOne({ _id: req.params.id }).then((emp) => {
          res.status(200).json({
            company: emp,
          });
        }
      );
    }
  );
router.get("/", (req, res, next) => {

  Company.find({}, function (err, data) {
    if (err) {
      console.log("err")
    }
    else {
      res.status(200).json({
        message: "company get successfully!",
        companey: data
      });
    }
  }


  );
});
router.delete("/:id", (req, res, next) => {
  Company.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Company deleted!" });
  });
});


module.exports = router;
