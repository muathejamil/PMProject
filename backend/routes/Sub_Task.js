const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


const Project = require("../models/Project");//get,add,delete
const Company = require("../models/Company");//when rigestration,get,add,
const Employee = require("../models/Employee");//get,add,
const Freelancer = require("../models/Freelancer");//add get
const Manager = require("../models/Manager");//creat
const Sub_Manager = require("../models/Sub_Manager");
const Sub_Task = require("../models/Sub_Task");
const Task = require("../models/Task");//get,add,
const Offer= require("../models/Offer");

router.post("/", (req, res, next) => {

  const sub_task = new Sub_Task();
  sub_task.name = req.body.name;
  sub_task.startdate = req.body.startdate;
  sub_task.enddate = req.body.enddate;
  sub_task.emplyee = sub_task.emplyee.concat(req.body.employee);
  sub_task.projectId = req.body.projectId;
  sub_task.taskId = req.body.taskId;
  sub_task.save().then(()=>{
        Task.findOneAndUpdate({ _id: req.body.TaskId }, { $push:{subtasks : sub_task._id }}).then(
          ()=>{
          for (let i = 0; i < req.body.emplyee.length; i++) {
              Employee.findOneAndUpdate({ _id: req.body.emplyee[i] }, { $push:{subtasks: sub_task._id }}).then((y) => {
                if(i==req.body.emplyee.length-1){
                  res.status(200).json({
                    message: "Posts fetched successfully!",
                    task: task
                  })
                }
              });

            }

          })

      });
    });

    router.post("/edit", (req, res, next) => {
      Sub_Task.find({_id:id}).then(()=>{
      if(req.body.status!=null){
        Sub_Task.findOneAndUpdate({_id:id},{status:req.body.status}).then(()=>{
          if(req.body.employee!=null){
            Sub_Task.findOneAndUpdate({_id:id},{$push :{emplyee:req.body.employee}}).then((sub)=>{
              res.status(200).json({
                msg:"edited succefully",
                sub_task:sub
              })
            })
          }
        })
      }
      })



    });

router.get("/", (req, res, next) => {
  Sub_Task.find({}, function (err, data) {
    if (err) {
      console.log("err")
    }
    else {
      res.status(200).json({
        message: "Sub_Task fetched successfully!",
        Tasks: data
      });
    }
  })
});

router.delete("/:id", (req, res, next) => {
  Sub_Task.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Sub_Task deleted!" });
  });
});

module.exports = router;
