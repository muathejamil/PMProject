import { Component, OnInit } from '@angular/core';
import { ShowJobService } from '../show-job.service';
import { OfferService } from 'src/app/Company/company-projects/shared/offer.service';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { FreeLancerService } from 'src/app/Freelancer/FreeLancer.service';

@Component({
  selector: 'app-show-job',
  templateUrl: './show-job.component.html',
  styleUrls: ['./show-job.component.css'],
})
export class ShowJobComponent implements OnInit {
  public jobs: any[];
  Job:any
  constructor(private OfferServices: OfferService,private freeServices: FreeLancerService) {}

  ngOnInit() {
    this.OfferServices.getoffersfreeLancer().subscribe((data)=>{
      this.Job=data
      this.jobs=this.Job.offers
      for(let i=0;i<this.jobs.length;i++){
        for(let j=0;j<this.jobs[i].freelancers.length;j++){
        if(this.freeServices.FREEIdFOREmpPage==this.jobs[i].freelancers[j]){
          this.jobs.splice(i,1)
          i--;
          break;
        }
      }}
    })
  }
apply(id:string ,i:number){
this.OfferServices.applyForOffer(id,this.freeServices.FREEIdFOREmpPage).subscribe((data)=>{
  console.log(data);
  this.jobs.splice(i,1);
})
}

}
