const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name: { type: String},
  startdate: { type: Date},
  enddate: { type: Date },
  emplyee:[],
  status:{ type: String,default:"working on it" },
  taskId:String,
  projectId:String

});

module.exports = mongoose.model('Sub_Task', Schema);
