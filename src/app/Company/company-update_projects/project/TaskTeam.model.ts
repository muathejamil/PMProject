export class TaskTeam {
  TaskID: string;
  TaskName:string;
  TeamsName:[string];
  EmployeeId:string;
  dependOn:string;
  StartDate:string;
  EndDate:string;
  priority:string;
  TeamID:string;
  Finished:string;
  Reports:[{
    discription:String,
    employeeid:String,
    Employeename:String
  }];
}
