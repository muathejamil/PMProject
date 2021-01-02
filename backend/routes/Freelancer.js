const express = require("express");
const router = express.Router();

const Freelancer = require("../models/Freelancer");//add get


router.post("/", (req, res, next) => {

  const freelancer = new Freelancer();
  freelancer.name = req.body.name;
  freelancer.email=req.body.email;
  freelancer.password=req.body.password;
  freelancer.specality=req.body.Specialty
  freelancer.save().then(
    () => {
        res.status(201).json({
          message: "freelancer added successfully",
        });
    });

});

router.get("/", (req, res, next) => {

  Freelancer.find({}, function (err, data) {
    if (err) {
      console.log("err")
    }
    else {
      res.status(200).json({
        message: "Freelancer fetched successfully!",
        prjs: data
      });
    }
  }
  );
});

router.delete("/:id", (req, res, next) => {
  Freelancer.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Freelancer deleted!" });
  });
});

router.post("/tasks", (req, res, next) => {
  var Tasks = [];
  Freelancer.findOne({ _id: req.body.id }).then((emp) => {
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
  Freelancer.findOne({ _id: req.body.id }).then((emp) => {
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

router.get("/:id", (req, res, next) => {
  Freelancer.findOne({ _id: req.params.id }).then((emp) => {
          res.status(200).json({
            free: emp,
          });
        }
      );
    }
  );

module.exports = router;
