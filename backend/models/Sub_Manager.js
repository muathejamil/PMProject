const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name: { type: String,required:true},
  DOB: { type: String,required:false},
  salary: { type: String ,default:"1500"},
  age: { type: String ,required:false},
  specality: { type: String ,required:false},
  projects: [],
  teams:[],
  tasks:[],
  company:{type: String ,required:true},
  abilites:[Boolean],
  email:{type:String,required:true},
  password:{type:String,required:true},
  Reportstosee:[]
});

module.exports = mongoose.model('Sub_Manager', Schema);
