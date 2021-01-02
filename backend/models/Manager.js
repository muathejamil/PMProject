const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name: { type: String,required:true},
  DOB: { type: String,required:false},
  salary: { type: String ,default:"1500"},
  age: { type: String ,required:false},
  specality: { type: String ,required:false},
  projects: [],
  teams:[],
  company:{type: String},
  email:{type:String,required:true},
  password:{type:String,required:true}
});

module.exports = mongoose.model('Manager', Schema);
