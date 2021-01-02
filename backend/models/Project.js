const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  name: { type: String},
  startdate: { type: Date},
  enddate: { type: Date },
  supervisrId: { type: String },
  supervisrname:String,
  tasks:[],
  emplyees:[],
  companyID:String

});

module.exports = mongoose.model('Project', ProjectSchema);
