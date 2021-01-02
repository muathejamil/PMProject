import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Task } from './Task.model';
import { ProjectService } from 'src/app/Company/company-projects/shared/project.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { edittask } from './edit/edittask.component';

@Component({
  selector: 'app-employee-task',
  templateUrl: './employee-task.component.html',
  styleUrls: ['./employee-task.component.css'],
})
export class EmployeeTaskComponent implements OnInit {
  taskList:Task[]=[]
  tasksres:any
  res:any
  temp2:any
  constructor(private employeeservices:EmployeeService,
    private dialog: MatDialog,
    private projectservices:ProjectService) {}

  ngOnInit(): void {

    this.employeeservices.gettasksList(this.employeeservices.EmployeeIdFOREmpPage).subscribe((data)=>{
      this.tasksres=data;
      this.taskList=this.tasksres.Tasks;
      for(let i=0; i<this.tasksres.Tasks.length;i++){
      this.taskList[i].taskID=this.tasksres.Tasks[i]._id
      this.taskList[i].StartDate=this.tasksres.Tasks[i].startdate
      this.taskList[i].EndDate=this.tasksres.Tasks[i].enddate
      this.taskList[i].stutus=this.tasksres.Tasks[i].status
      this.taskList[i].taskName=this.tasksres.Tasks[i].name
      this.taskList[i].Finished=this.tasksres.Tasks[i].Finished
      this.projectservices.getone(this.tasksres.Tasks[i].projectId).subscribe((res)=>{
      this.res=res
     // console.log(this.res)
      this.taskList[i].ProjectName=this.res.project.name
      })


      }
    });
  }
  edit(task:any){
    let employeeId=this.employeeservices.EmployeeIdFOREmpPage
    this.employeeservices.getone(employeeId).subscribe((data)=>{
    this.temp2=data
      let Employeename=this.temp2.employee.name
const dialogConfig = new MatDialogConfig();
dialogConfig.autoFocus = true;
dialogConfig.disableClose = true;
dialogConfig.width = '25%';
dialogConfig.data = {task,employeeId,Employeename};

this.dialog.open(edittask, dialogConfig).afterClosed().subscribe((data)=>{
  this.ngOnInit()}
  )
    })

  }
}
