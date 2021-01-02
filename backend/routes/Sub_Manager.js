const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Employee = require("../models/Employee");//get,add,
const Sub_Manager = require("../models/Sub_Manager");



router.post("/", (req, res, next) => {
  Employee.findById({_id:req.body.empId}).then((emp)=>{
  const sub_manager = new Sub_Manager();
  sub_manager.name = emp.name;
  sub_manager.DOB = emp.DOB;
  sub_manager.age = emp.age;
  sub_manager.specality = emp.specality;
  sub_manager.projects = emp.projects;
  sub_manager.tasks = emp.tasks;
  sub_manager.company = emp.cmpanyid;
  sub_manager.abilites=req.body.abilites;
  sub_manager.Reportstosee=emp.Reportstosee;
  sub_manager.password=emp.password;
  sub_manager.emil=emp.emil;

  sub_manager.save().then(
    () => {
      Employee.deleteOne({_id:req.body.empId}).then(()=>{
        res.status(201).json({
          message: "sub_manager added successfully",
        });
      })

    });
  })
});

router.get("/", (req, res, next) => {

  Sub_Manager.find({}, function (err, data) {
    if (err) {
      console.log("err")
    }
    else {
      res.status(200).json({
        message: "Posts fetched successfully!",
        prjs: data
      });
    }
  }
  );
});
router.delete("/:id", (req, res, next) => {
  Sub_Manager.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Sub_Manager deleted!" });
  });
});

router.get("/projects", (req, res, next) => {
  var prj=[];
  Sub_Manager.findOne({_id:req.body.id}).then((emp)=>{
    for(let i=0;i<emp.projects.length;i++){
    Project.findOne({_id:emp.projects[i]}).then((X)=>{
      prj.push(X);
      if(i==(emp.projects.length-1)){
        res.status(200).json({
          message: "projects fetched successfully!",
          projects: prj
        });
      }
    })
    }


  })


});

router.get("/tasks", (req, res, next) => {
  var Tasks=[];
  Sub_Manager.findOne({_id:req.body.id}).then((emp)=>{
    for(let i=0;i<emp.tasks.length;i++){
    Task.findOne({_id:emp.tasks[i]}).then((X)=>{
      Tasks.push(X);
      if(i==(emp.tasks.length-1)){
        res.status(200).json({
          message: "Tasks fetched successfully!",
          Tasks: Tasks
        });
      }
    })
    }


  })


});
module.exports = router;
