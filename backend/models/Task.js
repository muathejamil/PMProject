const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name: { type: String},
  startdate: { type: Date},
  enddate: { type: Date },
  emplyee:{ type: []  },
  teams:[],
  subtasks:[],
  status:{ type: String,default:"working on it" },
  priority:{type:Number, required:true},
  dependOn:{type:[]},
  projectId: {type:String},
  Reports:[{
    discription:String,
    employeeid:String,
    Employeename:String
  }],
  Finished:{type:String,default:"0%"}
});

module.exports = mongoose.model('Task', Schema);
