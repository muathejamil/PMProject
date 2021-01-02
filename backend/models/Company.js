const mongoose = require('mongoose');

const compSchema = mongoose.Schema({
  name: { type: String,required:true},
  projects: {type:[],required:false},
  teams:{type:[],required:false},
  Sub_Managers:{type:[],required:false},
  Manager:{type:String,required:false},
  freeLancers:{type:[],required:false},
  Employees:{type:[],required:false},
  Managers:{type:[],required:false},
  Teams:{type:[],required:false},
  companyID:String,
  createdOffers:[],
  discription:String,

});
//GZ9VC7WENJVdnq5c
//mongo "mongodb+srv://cluster0-2dbcj.mongodb.net/test" --username Tariq
module.exports = mongoose.model('Company', compSchema);
