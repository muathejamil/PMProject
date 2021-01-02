const mongoose = require("mongoose");

const EmpSchema = mongoose.Schema({
  name: { type: String, required: true },
  DOB: { type: String, required: false },
  salary: { type: String, default: "900" },
  age: { type: String, required: false },
  specality: { type: String, required: false },
  projects: { type: [], required: false },
  tasks: { type: [], required: false },
  subtasks: { type: [], required: false },
  teams: { type: [], required: false },
  cmpanyid: { type: String },
  email: { type: String, required: true },
  password: { type: String },
  Reports: [],
  Reportstosee: [],
});
//GZ9VC7WENJVdnq5c
//mongo "mongodb+srv://cluster0-2dbcj.mongodb.net/test" --username Tariq
module.exports = mongoose.model("Employee", EmpSchema);
