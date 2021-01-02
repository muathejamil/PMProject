const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Company = require("../models/Company"); //when rigestration,get,add,
const Employee = require("../models/Employee"); //get,add,
const Project = require("../models/Project"); //get,add,delete
const Task = require("../models/Task"); //get,add,delete
const Team = require("../models/Team"); //get,add,delete

router.post("/", (req, res, next) => {
  const team = new Team();
  team.name = req.body.name;
  team.specality = req.body.specality;
  team.cmpanyid = req.body.cmpanyid;
  team.superVisor=req.body.superVisor;
  team.Employees = team.Employees.concat(req.body.Employees);
  team.Employees.push(req.body.superVisor)
  team.save().then(() => {
      Company.findOneAndUpdate(
        { _id: req.body.cmpanyid },
        { $push: { Teams: team._id } }
      )
      Employee.findOneAndUpdate(
        { _id: req.body.superVisor },
        { $push: { teams: team._id } })
      for (let i = 0; i < req.body.Employees.length; i++) {
        Employee.findOneAndUpdate(
          { _id: req.body.Employees[i] },
          { $push: { teams: team._id } }
        ).then(() => {
          if (i == req.body.Employees.length - 1) {
            res.status(201).json({
              message: "Team added successfully",
              id: team._id,
            });
          }
        });
      }
    });
  });

router.get("/", (req, res, next) => {
  Team.find({}, function (err, data) {
    if (err) {
      console.log("err");
    } else {
      res.status(200).json({
        message: "Posts fetched successfully!",
        Teams: data,
      });
    }
  });
});
router.get("/:id", (req, res, next) => {
  Team.findOne({ _id: req.params.id }).then((emp) => {
          res.status(200).json({
            team: emp,
          });
        }
      );
    }
  );


router.delete("/:id", (req, res, next) => {
  Team.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "Team deleted!" });
  });
});

router.get("/projects", (req, res, next) => {
  var prj = [];
  Team.findOne({ _id: req.body.id }).then((emp) => {
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
    }
  });
});

router.get("/tasks", (req, res, next) => {
  var Tasks = [];
  Team.findOne({ _id: req.body.id }).then((emp) => {
    for (let i = 0; i < emp.tasks.length; i++) {
      Task.findOne({ _id: emp.tasks[i] }).then((X) => {
        Tasks.push(X);
        if (i == emp.tasks.length - 1) {
          res.status(200).json({
            message: "Tasks fetched successfully!",
            Tasks: Tasks,
          });
        }
      });
    }
  });
});

router.get("/Emolyees", (req, res, next) => {
  var employees = [];
  Team.findOne({ _id: req.body.id }).then((emp) => {
    for (let i = 0; i < emp.Employees.length; i++) {
      Employee.findOne({ _id: emp.Employees[i] }).then((X) => {
        employees.push(X);
        if (i == emp.Employees.length - 1) {
          res.status(200).json({
            message: "Tasks fetched successfully!",
            employees: employees,
          });
        }
      });
    }
  });
});


router.post("/updateEmployee", (req, res, next) => {
Team.findOne({_id:req.body.id}).then((team)=>{
let unique = [...new Set(req.body.employees)];
let uniqueemployee=[...new Set(req.body.uniqueemployee)]
Team.findOneAndUpdate({_id:req.body.id},{Employees:unique,name:req.body.name,superVisor:req.body.ManagerID}).then((X)=>{
  for(let i=0;i<uniqueemployee.length;i++){
    Employee.findByIdAndUpdate({_id:req.uniqueemployee[i]},{$push:{teams:X._id}}).then(()=>{
      if(i==req.body.employees.length-1){
        res.status(200).json({
          message:"done"
        })
      }

    })


  }
})
})
  });
module.exports = router;
