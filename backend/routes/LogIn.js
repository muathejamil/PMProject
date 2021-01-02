const express = require("express");
const { exec } = require('child_process');
const router = express.Router();
const Freelancer = require("../models/Freelancer");//add get
const Employee = require("../models/Employee");//get,add,
const Manager = require("../models/Manager");//creat
const Sub_Manager = require("../models/Sub_Manager");
const jwt = require("jsonwebtoken");


router.post("/", (req, res, next) => {
  var mid ;
  var User;
/// find User type if he exist
const getuser =()=>{
  return new Promise((resolve,reject)=>{
    Manager.findOne({ email: req.body.email },function(err,user){
      if (user==null) {
        Sub_Manager.findOne({ email: req.body.email }).then(user=>{
          if (user==null) {
            Employee.findOne({ email: req.body.email }).then(user=>{
              if (user==null) {
                Freelancer.findOne({ email: req.body.email }).then(user=>{
                  if (user==null) {
                      res.status(200).json({
                        message:"wrong email or password"
                      } )
                      reject({text:'wrong email or password',
                      user:null
                      })
                  }
                  else {
                    mid="Freelancer";
                    User=user;
                    resolve({user:user,text:'Freelancer'})
                  }
                })
              }
              else {
                mid="Employee";
                User=user;
                console.log(1);
                resolve({user:user,text:'Employee'})


              }

            })
          }
          else {
            mid="Sub_Manager";
            User=user;
            resolve({user:user,text:'Sub_Manager'})

          }

        })
      }
      else {
        mid="Manager";
        User=user;
        resolve({user:user,text:'Manager'})

      }

    })
  })
}
  getuser().then((user) => {
    console.log(user);
    console.log("2");

      if (user.user.password == req.body.password) {
        const token = jwt.sign(
          {
            type:user.text
          },
          "TAMProject",
          {
              expiresIn: "1h"
          }
        );
        return res.status(200).json({
          message: "Auth successful",
          token: token,
          type:user.text,
          user:user.user
        });
      }
      else{
        return res.status(200).json({
          message: "Auth faild"
        });
      }
    });

});


module.exports = router;
