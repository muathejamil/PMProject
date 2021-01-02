const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const Project = require("./models/Project");//get,add,delete
const Company = require("./models/Company");//when rigestration,get,add,
const Employee = require("./models/Employee");//get,add,
const Freelancer = require("./models/Freelancer");//add get
const Manager = require("./models/Manager");//creat
const Sub_Manager = require("./models/Sub_Manager");
const Sub_Task = require("./models/Sub_Task");
const Task = require("./models/Task");//get,add,
const Offer= require("./models/Offer");
const Report= require("./models/Report");

//routes
const ProjectRoutes = require("./routes/Project");
const CompanyRoutes = require("./routes/Company");
const EmployeeRoutes = require("./routes/Employee");
const FreelancerRoutes = require("./routes/Freelancer");
const ManagertRoutes = require("./routes/Manager");
const Sub_ManagerRoutes = require("./routes/Sub_Manager");
const Sub_TaskRoutes = require("./routes/Sub_Task");
const TaskRoutes = require("./routes/Task");
const OfferRoutes = require("./routes/Offer");
const freeOfferRoutes = require("./routes/freeOffer");
const LoginRoutes = require("./routes/LogIn");
const CriticRoutes = require("./routes/criticalpath");
const ReportRoutes = require("./routes/Report");
const TeamRoutes = require("./routes/Team");




mongoose
  .connect(
    "mongodb+srv://Tariq:GZ9VC7WENJVdnq5c@cluster0-2dbcj.mongodb.net/T1?retryWrites=true&w=majority"
    , err => {
      if (err) {
        console.log("Connection failed!");
      }
      else {
        console.log("Connected to database!");

      }

    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS, UPDATE"
  );

  next();
});
app.use("/api/Company", CompanyRoutes);
app.use("/api/prj", ProjectRoutes);
app.use("/api/Task", TaskRoutes);
app.use("/api/Employee", EmployeeRoutes);
app.use("/api/Freelancer", FreelancerRoutes);
app.use("/api/Manager", ManagertRoutes);
app.use("/api/Sub_Manager", Sub_ManagerRoutes);
app.use("/api/Sub_Task", Sub_TaskRoutes);
app.use("/api/Offer", OfferRoutes);
app.use("/api/freeOffer", freeOfferRoutes);
app.use("/api/LogIn", LoginRoutes);
app.use("/api/Crit", CriticRoutes);
app.use("/api/Rep", ReportRoutes);
app.use("/api/team", TeamRoutes);

///accept 0ffer




module.exports = app;
