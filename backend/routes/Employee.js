const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Company = require("../models/Company"); //when rigestration,get,add,
const Employee = require("../models/Employee"); //get,add,
const Project = require("../models/Project"); //get,add,delete
const Task = require("../models/Task"); //get,add,delete
const Sub_Task = require("../models/Sub_Task"); //get,add,delete
const Team = require("../models/Team"); //get,add,delete

router.post("/", (req, res, next) => {
  const employee = new Employee();
  Company.findOne({ _id: req.body.cmpanyid }).then(()=>{
    employee.name = req.body.name;
    employee.specality = req.body.Specialty;
    employee.cmpanyid = req.body.cmpanyid; //will get it from the maneger
    employee.email = req.body.email;
    employee.password = req.body.password;
    employee.save().then(() => {
      Company.findOneAndUpdate(
        { _id: req.body.cmpanyid },
        { $push: { Employees: employee._id } }
      ).then(() => {
        res.status(201).json({
          message: "Employee added successfully",
          id: employee._id,
        });
      });
    });}).catch(()=>{
      res.status(400).json({
        message: " error",

      });
    })

});
router.get("/", (req, res, next) => {
  Employee.find({}, function (err, data) {
    if (err) {
      console.log("err");
    } else {
      res.status(200).json({
        message: "Posts fetched successfully!",
        employees: data,
      });
    }
  });
});

router.delete("/:id", (req, res, next) => {
  Employee.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "Employee deleted!" });
  });
});

router.post("/projects", (req, res, next) => {
  var prj = [];
  Employee.findOne({ _id: req.body.id }).then((emp) => {
    if(emp.projects.length!=0){
    for (let i = 0; i < emp.projects.length; i++) {
      Project.findOne({ _id: emp.projects[i] }).then((X) => {
        prj.push(X);
        if (i == emp.projects.length - 1) {
          res.status(200).json({
            message: "projects fetched successfully!",
            projects: prj,
          });
        }
      });
    }}
    else{
      res.status(200).json({
        message: "no projects for this employee",
        projects: prj,
      });
    }
  });
});
router.get("/:id", (req, res, next) => {
  Employee.findOne({ _id: req.params.id }).then((emp) => {
          res.status(200).json({
            employee: emp,
          });
        }
      );
    }
  );



router.post("/tasks", (req, res, next) => {
  var Tasks = [];
  Employee.findOne({ _id: req.body.id }).then((emp) => {
    if(emp.tasks.length!=0){
    for (let i = 0; i < emp.tasks.length; i++) {
      Task.findOne({ _id: emp.tasks[i] }).then((X) => {
        Tasks.push(X)
        if (i == emp.tasks.length - 1) {
          while(true){
            if(Tasks.length==emp.tasks.length){
          res.status(200).json({
            message: "Tasks fetched successfully!",
            Tasks: Tasks,
          });}

        }
        }
      });
    }}
    else{
      res.status(200).json({
        message: "no tasks for this employee",
        Tasks: Tasks,
      });
    }
  });
});

router.post("/Teams", (req, res, next) => {
  var Teams = [];
  Employee.findOne({ _id: req.body.id }).then((emp) => {
    if(emp.teams.length!=0){
    for (let i = 0; i < emp.teams.length; i++) {
      Team.findOne({ _id: emp.teams[i] }).then((X) => {
        Teams.push(X)
        if (i == emp.teams.length - 1) {
          while(true){
            if(Teams.length==emp.teams.length){
          res.status(200).json({
            message: "teams fetched successfully!",
            Teams: Teams,
          });}

        }
        }
      });
    }}
    else{
      res.status(200).json({
        message: "no tasks for this employee",
        Teams: Teams,
      });
    }
  });
});
router.get("/subtasks", (req, res, next) => {
  var SubTasks = [];
  Employee.findOne({ _id: req.body.id }).then((emp) => {
    for (let i = 0; i < emp.subtasks.length; i++) {
      Sub_Task.findOne({ _id: emp.subtasks[i] }).then((X) => {
        SubTasks.push(X);
        if (i == emp.subtasks.length - 1) {
          res.status(200).json({
            message: "SubTasks fetched successfully!",
            SubTasks: SubTasks,
          });
        }
      });
    }
  });
});

module.exports = router;
