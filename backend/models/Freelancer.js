const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name: { type: String,required:true},
  DOB: { type: String,required:false},
  Hourly_rate: { type: String ,default:"5"},
  age: { type: String ,required:false},
  specality: { type: String ,required:false},
  projects: [],
  tasks: [],
  subtasks:[],
  teams:[],
  companeis:[],
  offers:[],
  watingoffers:[],
  email:{type:String,required:true},
  password:{type:String,required:true}


});

module.exports = mongoose.model('Freelancer', Schema);
