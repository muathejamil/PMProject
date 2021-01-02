const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
  name: { type: String,required:true},
  specality: { type: String},
  projects: {type:[],required:false},
  tasks:{type:[],required:false},
  cmpanyid: {type: String},
  superVisor:String,
  Employees:[]
});
//GZ9VC7WENJVdnq5c
//mongo "mongodb+srv://cluster0-2dbcj.mongodb.net/test" --username Tariq
module.exports = mongoose.model('Team', TeamSchema);
