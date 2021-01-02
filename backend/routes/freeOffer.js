const express = require("express");
const router = express.Router();

const Freelancer = require("../models/Freelancer");//add get
const Offer= require("../models/Offer");
const Company= require("../models/Company");

router.post("/apply", (req, res, next) => {
  if(req.body.id && req.body.freelancerID){
      Offer.findOneAndUpdate({_id:req.body.id}, { $push: { freelancers:req.body.freelancerID}}).then((s)=>{
       Freelancer.findOneAndUpdate({_id:req.body.freelancerID}, { $push: { watingoffers:req.body.id}}).then(()=>{
        res.status(201).json({
          message: "wating for company response",
        });
       })

      })}
      else{
        res.status(201).json({
          message: "wrong data",
        });
      }

});
router.post("/approved", (req, res, next) => {
  Freelancer.findOneAndUpdate({_id:req.body.freelancerID}, { $push: { offers:req.body.OfferID}}).then(()=>{
    Freelancer.findOneAndUpdate({_id:req.body.freelancerID}, { $push: { companeis:req.body.CompanyID}}).then(()=>{
      Company.findOneAndUpdate({_id:req.body.CompanyID}, { $push: { freeLancers:req.body.freelancerID}}).then(()=>{
        Offer.findOneAndUpdate({_id:req.body.OfferID}, { status:"taken"}).then(()=>{

           res.status(201).json({
           message: "aprroved free lancer added to company list ",
         });
       })
     })
   })
  })
});

router.post("/getoffers", (req, res, next) => {
  Freelancer.findOne({_id:req.body.freelancerID}).then((free)=>{
    Offers=[];
    if(free.offers.length !=0){
          for(let i=0;i<free.offers.length;i++){
              Offer.findOne({_id:free.offers[i]}).then((X)=>{
                Offers.push(X);
                if(i==free.offers.length-1){
                  res.status(200).json({
                    message:"get offers seccssfuly",
                    offers:Offers
                  })
                }
              })
          }
      }
      else{
        res.status(200).json({
          message:"no offers for this freelancer"
        })
      }
  })
});
module.exports = router;
