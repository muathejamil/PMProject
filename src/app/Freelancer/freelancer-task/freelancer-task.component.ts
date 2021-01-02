import { Component, OnInit } from '@angular/core';
import { FreeLancerService } from '../FreeLancer.service';
import { ProjectService } from 'src/app/Company/company-projects/shared/project.service';
import { Task } from 'src/app/Employee/employee-task/Task.model';

@Component({
  selector: 'app-freelancer-task',
  templateUrl: './freelancer-task.component.html',
  styleUrls: ['./freelancer-task.component.css'],
})
export class FreelancerTaskComponent implements OnInit {
  tasksres:any
  taskList:Task[]=[]
  res:any
  constructor(private Freeservices:FreeLancerService,private projectservices:ProjectService) {}

  ngOnInit(): void {
    this.Freeservices.gettasksList(this.Freeservices.FREEIdFOREmpPage).then((data)=>{
      this.tasksres=data;
      console.log( this.tasksres.Tasks)
      for(let i=0; i<this.tasksres.Tasks.length;i++){
      this.taskList[i].taskID=this.tasksres.Tasks[i]._id
      this.projectservices.getone(this.tasksres.Tasks[i].projectId).subscribe((res)=>{
      this.res=res
       console.log(res)

      })
      this.taskList[i].StartDate=this.tasksres.Tasks[i].startdate
      this.taskList[i].EndDate=this.tasksres.Tasks[i].enddate
      this.taskList[i].stutus=this.tasksres.Tasks[i].status
      this.taskList[i].taskName=this.tasksres.Tasks[i].name

      }
    });
  }
  onEditTask() {
    console.log('3ash el maleek ');
  }
}
