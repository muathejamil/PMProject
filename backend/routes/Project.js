const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Project = require("../models/Project");//get,add,delete
const Employee = require("../models/Employee");//get,add,
const Task = require("../models/Task");//get,add,


//5eb0b4c7c1db4b343ce3ff97


router.post("/", (req, res, next) => {

  const project = new Project();
  project.name = req.body.name;
  project.startdate = req.body.startdate;
  project.enddate = req.body.enddate;
  project.supervisrId = req.body.supervisrId;
  project.emplyees=project.emplyees.concat(req.body.emplyees);
  project.save().then(
    () => {
      Employee.findOneAndUpdate({ _id: req.body.supervisrId }, { $push: { projects: project._id } }).then(
        () => {
          if(req.body.emplyees!=null){
          for (let i=0;i< req.body.emplyees.length;i++){
            Employee.findOneAndUpdate({ _id: req.body.emplyees[i] }, { $push: { projects: project._id } }).then(
          ()=>{
            if(i==req.body.emplyees.length-1){
            res.status(200).json({
              message: "Posts fetched successfully!",
              id:project._id
            })}

            })
          }}
          else{
            res.status(200).json({
              message: "Posts fetched successfully!",
              id:project._id
            })
          }
          }

      );
    });
});
router.get("/:id", (req, res, next) => {
  Project.findOne({ _id: req.params.id }).then((emp) => {
          res.status(200).json({
            project: emp,
          });
        }
      );
    }
  );
router.get("/", (req, res, next) => {
  Project.find({}, function (err, data) {
    if (err) {
      console.log("err")
    }
    else {
      res.status(200).json({
        message: "Posts fetched successfully!",
        prjs: data
      });
    }
  })
});

router.delete("/:id", (req, res, next) => {
  Project.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});





router.post("/Employees", (req, res, next) => {
  var emp=[];
  Project.findOne({_id:req.body.id}).then((prj)=>{
    for(let i=0;i<prj.emplyees.length;i++){
    Employee.findOne({_id:prj.emplyees[i]}).then((X)=>{
      emp.push(X);
      if(i==(prj.emplyees.length-1)){
        res.status(200).json({
          message: "Employees fetched successfully!",
          Employees: emp
        });
      }
    })
    }


  })


});

router.post("/Tasks", (req, res, next) => {
  var tasks=[];
  Project.findOne({_id:req.body.id}).then((prj)=>{
    if(prj.tasks.length==0){
      res.status(200).json({
        message: "Employees fetched successfully!",
        Tasks: tasks
      });
    }
    else{
    for(let i=0;i<prj.tasks.length;i++){
    Task.findOne({_id:prj.tasks[i]}).then((X)=>{
      tasks.push(X);
      if(i==(prj.tasks.length-1)){
        res.status(200).json({
          message: "Employees fetched successfully!",
          Tasks: tasks
        });
      }
    })
    }}


  })


});
module.exports = router;
