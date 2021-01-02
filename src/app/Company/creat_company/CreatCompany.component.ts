import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { CompanyService } from './Company.service';

@Component({
  selector: 'app-CreatCompany',
  templateUrl: './CreatCompany.component.html',
  styleUrls: ['./CreatCompany.component.css'],
})
export class CreatCompanyComponent implements OnInit {
  constructor(public Companysevice:CompanyService) {}
    res:any
  ngOnInit(): void {}

  onAddJob(form:NgForm){
    if(form.value.Name && form.value.description){
    console.log(this.Companysevice.ManagerID)
    this.Companysevice.CreatCompany(form.value.Name,form.value.description,this.Companysevice.ManagerID).subscribe((data)=>{
    console.log(data)
    this.res=data
    this.Companysevice.CompanyID=this.res.id
    })
    console.log(form.value.description)
    form.reset()
  }
  }
}
