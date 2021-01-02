const mongoose = require('mongoose');

const ReportSchema = mongoose.Schema({
  name: { type: String,required:true},
  ProjectId: { type: String,required:true},
  createrId:String,
  EmpDscription:[],///should have 	"taskId" "taskStatus" "expectedFinidh" "empID""Notes" "id"

  type:{type:String,default:"weekly"},//daily , weekly,monthely
  startDate:{type:Date,required:true}
});

module.exports = mongoose.model('Report', ReportSchema);
