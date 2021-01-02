import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../creat_company/Company.service';
import { OfferService } from '../company-projects/shared/offer.service';
import { FreeLancerService } from 'src/app/Freelancer/FreeLancer.service';

@Component({
  selector: 'app-company-freelancer',
  templateUrl: './company-freelancer.component.html',
  styleUrls: ['./company-freelancer.component.css'],
})
export class CompanyFreelancerComponent implements OnInit {
  freelancerList :any[];
  company:any
  free:any
  constructor(private router:Router ,private companysevices:CompanyService,private Offersevices:OfferService,private Freeservices:FreeLancerService) {}

  ngOnInit(): void {

    this.companysevices.getone(this.companysevices.CompanyID).subscribe((data)=>{
      this.company=data;
      console.log(data)
      console.log(this.company.company.freeLancers)
      console.log(this.company.company.freeLancers.length)
      this.freelancerList=this.company.company.freeLancers
      for(let i=0;i<this.company.company.freeLancers.length;i++){
        this.Freeservices.getone(this.company.company.freeLancers[i]).subscribe((data)=>{
          this.free=data;
          this.freelancerList[i]=this.free.free
        })
      }
    })
  }

  seeoffers(){
    this.router.navigate(['companyHeader/SeeOffer'])

  }
}
