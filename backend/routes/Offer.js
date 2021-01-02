const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Offer= require("../models/Offer");
const Company= require("../models/Company");

const checkAuth = require('../Authorization/check-auth');


router.post("/", (req, res, next) => {
  const offer = new Offer();
  offer.name = req.body.name;
  offer.dueto = req.body.dueto;
  offer.companyId = req.body.companyId;
  offer.description=req.body.description;
  offer.save().then(
    () => {
      Company.findOneAndUpdate({_id:req.body.companyId},{$push:{createdOffers:offer._id}}).then(()=>{
        return res.status(201).json({
          message: "offer added successfully",
        });
    });
      })




});
router.get("/:id", (req, res, next) => {//send company id

  Offer.find({companyId:req.params.id}).then((data)=>{
    res.status(200).json({
      message: "offers fetched successfully!",
      offers: data
    });
  })

});
router.get("/", (req, res, next) => {//get all ofers

  Offer.find({}, function (err, data) {
    if (err) {
      console.log("err")
    }
    else {
      res.status(200).json({
        message: "Posts fetched successfully!",
        offers: data
      });
    }
  }
  );
});
router.delete("/:id", (req, res, next) => {
  Offer.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Offer deleted!" });
  });
});

module.exports = router;
