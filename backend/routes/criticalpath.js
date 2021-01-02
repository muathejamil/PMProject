const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var async=require('async');
const Project = require("../models/Project");//when rigestration,get,add,
const Task=require("../models/Task");
router.post("/", (req, res, next) => {
  var tasks=[

  ];
  const gettasks =()=>{//tmam
    return new Promise((resolve,reject)=>{
  Project.findOne({_id:req.body.id}).then((project)=>{
for(let i=0;i<project.tasks.length;i++){
Task.findOne({_id:project.tasks[i]}).then((task)=>{
const date1 = task.startdate.getDate();
const date2 = task.enddate.getDate();
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
tasks.push(task);
  if(i==project.tasks.length-1){
    resolve();
  }
})
}
  })
})}



  function find_end(remaningtask,finshedtasks){//??
    return new Promise((resolve,reject)=>{
      end=0,s=0;

      for( let k=0;k<remaningtask.dependOn.length;k++){
      for(let i=0;i<finshedtasks.length;i++){
        if(remaningtask.dependOn[k]==String(finshedtasks[i]._id)){

         if(finshedtasks[i].enddate>end){
          end=finshedtasks[i].enddate;
          }
          break;
        }

      }
      if(k ==(remaningtask.dependOn.length-1)){
        const date1 = remaningtask.startdate.getDate();
        const date2 = remaningtask.enddate.getDate();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = date2-date1;
        remaningtask.startdate=end;
       console.log(date1);
       console.log(date2);
       console.log(diffDays);
       var result = new Date(end);
      result.setDate(result.getDate() + diffDays);
        //console.log(result);
        remaningtask.enddate=result;
        resolve(remaningtask);
         }

      }

    })



    };

  gettasks().then(()=>{


    var remaningtasks=tasks;
    const tasklength=remaningtasks.length;
    var finshedtasks=[];
    var j=0;
 while(remaningtasks.length!=0){
  for(let i=0;i<remaningtasks.length;i++){
    if(remaningtasks[i].dependOn.length==0 ){
      finshedtasks[j]=remaningtasks[i];
      j++;
      remaningtasks.splice(i,1);
      i--;
    }
    else{
      var dependant_exist=[];
      for(let k=0;k<remaningtasks[i].dependOn.length;k++){
        for(let r=0;r<finshedtasks.length;r++){
          if(finshedtasks[r]._id==remaningtasks[i].dependOn[k]){
            dependant_exist[k]=true;
            break;
          }
          else{

            dependant_exist[k]=false;
          }
        }

      }
      var check=true;
     for(let r=0;r<dependant_exist.length;r++){
        if(dependant_exist[r]!=true){
          check=false;
        }
      }
      if(check==true){

      find_end(remaningtasks[i],finshedtasks).then((task)=>{//??
       // console.log(tasklength)
        finshedtasks[j] =task;
        j++;
        if(j==tasklength){
          res.status(200).json({
            tasks:finshedtasks
          })
        }


      })

      remaningtasks.splice(i,1);
      i--;


      }
    }

}
}

})






}
)



module.exports = router;
