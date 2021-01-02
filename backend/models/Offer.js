const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name: { type: String,required:true},
  dueto:String,
  freelancers:[],
  status:{type :String,default:"availabel"},
  companyId:String,
  description:String
});

module.exports = mongoose.model('Offer', Schema);
