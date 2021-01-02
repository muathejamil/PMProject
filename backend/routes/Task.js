const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Project = require("../models/Project");
const Employee = require("../models/Employee");
const Task = require("../models/Task");
const Team = require("../models/Team");



router.post("/", (req, res, next) => {

  const task = new Task();
  task.name = req.body.name;
  task.startdate = req.body.startdate;
  task.enddate = req.body.enddate;
  task.emplyee = task.emplyee.concat(req.body.employee);
  task.teams = task.teams.concat(req.body.teams);
  task.priority = req.body.priority;
  task.dependOn = task.dependOn.concat(req.body.dependOn);
  task.projectId = req.body.projectId;
  task.save().then(()=>{
    Project.findOneAndUpdate({ _id: req.body.projectId }, { $push:{tasks : task._id }}).then(
      (k)=>{
          Employee.findOneAndUpdate({ _id: req.body.employee[0] }, { $push:{tasks: task._id }}).then((y) => {
           Team.findOne({id:req.body.teams[0]}).then((X)=>{
            for (let i = 0; i < X.Employees.length; i++) {
              Employee.findOneAndUpdate({ _id: X.Employees[i] }, { $push:{tasks: task._id }}).then((y) => {

              if(i==X.Employees.length-1){
              res.status(200).json({
                message: "done successfully!",
                task: task
              })
              }
            })
            }


           })

          });


      })

  });
});



router.get("/", (req, res, next) => {
  Task.find({}, function (err, data) {
    if (err) {
      console.log("err")
    }
    else {
      res.status(200).json({
        message: "Posts fetched successfully!",
        Tasks: data
      });
    }
  })
});
router.get("/:id", (req, res, next) => {
  Task.findOne({ _id: req.params.id }).then((emp) => {
          res.status(200).json({
            task: emp,
          });
        }
      );
    }
  );

router.delete("/:id", (req, res, next) => {
  Task.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Task deleted!" });
  });
});

router.post("/update", (req, res, next) => {
  Task.findOneAndUpdate({ _id: req.body.id },{
    name:req.body.name,
    startdate:req.body.startdate,
    enddate:req.body.enddate,
    emplyee:req.body.emplyee,
    teams:req.body.teams,
    priority:req.body.priority,
    dependOn:req.body.dependOn,
    }).then(() => {
      Task.findOne({ _id: req.body.id }).then((emp)=>{
        res.status(200).json({
          task: emp,
        });
      }
    );
      })

    }
  );
  router.post("/Reports", (req, res, next) => {
    if(req.body.report.discription!=null && req.body.report.discription!="" ){
Task.findOneAndUpdate({_id:req.body.id},{$push:{Reports:req.body.report},status:req.body.status,Finished:req.body.Finished}).then(()=>{
  Task.findOneAndUpdate({_id:req.body.id},{status:req.body.status,Finished:req.body.Finished}).then((X)=>{
  res.status(200).json({message:"done",task:X});
})
  });}
else{
  Task.findOneAndUpdate({_id:req.body.id},{status:req.body.status,Finished:req.body.Finished}).then((X)=>{
    res.status(200).json({message:"done",task:X});
  })
}

});

module.exports = router;
