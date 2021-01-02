const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Company = require("../models/Company");//when rigestration,get,add,
const Employee = require("../models/Employee");//get,add,
const Project = require("../models/Project");//get,add,
const Report = require("../models/Report");//get,add,
const Sub_Manager=require("../models/Sub_Manager");

router.post("/", (req, res, next) => {
  const report = new Report();
  report.name=req.body.name;
  report.ProjectId=req.body.ProjectId;
  report.startDate=req.body.startDate;
  report.type=req.body.type;
  report.createrId==req.body.createrId;
  report.save().then((report)=>{
  Project.findOne({_id:req.body.ProjectId}).then((project)=>{

    for(let i=0;i<project.emplyees.length;i++){
      Employee.findOneAndUpdate({_id:project.emplyees[i]},{$push:{Reports:report._id}}).then((employee)=>{
      })
    }
  })
  Employee.findOne({ _id: req.body.createrId },function(err,user){
    if (user==null) {
      Sub_Manager.findOne({ _id: req.body.createrId }).then(user=>{
        if (user==null) {
          res.status(400).json({
            msg:"report did not added no supervisor found"

        })

        }
      else{
        Sub_Manager.updateOne({_id:user._id},{$push:{Reportstosee:report._id}}).then(()=>{
        res.status(200).json({
          msg:"report added successfully"

      })
    });


      }})
    }
    else{
      Employee.findOneAndUpdate({_id:user._id},{$push:{Reportstosee:report._id}}).then(()=>{
        res.status(200).json({
          msg:"report added successfully"

      })
      })



    }
  })})


})
router.post("/add", (req, res, next) => {
  Report.findOne({_id:req.bodyid}).then((report)=>{
    const data=[{
      taskId:req.body.taskId,
      taskStatus:req.body.taskStatus,
      expectedFinidh:req.body.expectedFinidh,
      empID:req.body.empID,
      Notes:req.body.Notes
    }]
    Report.findOneAndUpdate({_id:req.body.id},{$push:{EmpDscription:data}}).then(()=>{
      res.status(200).json({
        msg:"added successfully"
      })
    })

  })
})
router.get("/tosee",(req,res,next)=>{

  const getrep =(user)=>{
    return new Promise((resolve,reject)=>{
      var reports=[];
      for(let i=0;i<user.Reportstosee.length;i++){
        Report.findOne({_id:user.Reportstosee[i]}).then((report)=>{
          reports.push(report)
          console.log(reports)
          if(i==user.Reportstosee.length-1){
            resolve(reports);
          }
        })

      }
    })}
  Employee.findOne({ _id: req.body.createrId },function(err,user){
    if (user==null) {
      Sub_Manager.findOne({ _id: req.body.createrId }).then(user=>{
        if (user==null) {
          res.status(400).json({
            msg:"employee not found"
        })

        }
      else{
        getrep(user).then((reports)=>{
          res.status(200).json({
            msg:"report found successfully",
            reports:reports

        })
        })
      }})
    }
    else{
      getrep(user).then((reports)=>{
        res.status(200).json({
          msg:"report found successfully",
          reports:reports

      })
      })

    }
  })



})
router.get("/tofill",(req,res,next)=>{
  const getrep =(user)=>{
    return new Promise((resolve,reject)=>{
      var reports=[];
      for(let i=0;i<user.Reports.length;i++){
        Report.findOne({_id:user.Reports[i]}).then((report)=>{
          reports.push(report)

          if(i==user.Reports.length-1){
            resolve(reports);
          }
        })

      }
    })}
  Employee.findOne({ _id: req.body.id }).then(user=>{
    if(user==null){
      res.status(400).json({
        msg:"employee not found"
    })
    }
    else{
      getrep(user).then((reports)=>{
        res.status(200).json({
          msg:"report found successfully",
          reports:reports
        })
      })


    }
})
})

module.exports = router;
