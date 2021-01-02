import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { NgForm } from '@angular/forms';

import { TaskService } from 'src/app/Company/company-projects/shared/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-task',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css'],
})
export class edittask implements OnInit {
formdata:{
  Complet:string,
  taskdescription:string,
  taskstatus:string
}
temp:{
  discription:string,
    employeeid:string,
    Employeename:string
}
  constructor(
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    public dialogRef: MatDialogRef<edittask>,
    private taskService:TaskService,
    private router:Router

  ) {}

  ngOnInit() {
    console.log(this.data)
this.formdata={
Complet:this.data.task.Finished,
taskdescription:"",
taskstatus:this.data.task.status
}
this.temp={
  Employeename:"",
  employeeid:"",
  discription:""
}



  }
  onSubmit(form: NgForm) {
    console.log(this.data)
    this.temp.Employeename=this.data.Employeename
    this.temp.employeeid=this.data.employeeId
    this.temp.discription=form.value.taskdescription
    //console.log(temp)
    this.taskService.report(this.data.task._id,this.temp,form.value.taskstatus,form.value.Complet).subscribe((data=>{
    console.log(data)
  }))


  this.router.navigate(['EMPHeader/EmployeeTask'])

      this.dialogRef.close("true");
    }
  }


