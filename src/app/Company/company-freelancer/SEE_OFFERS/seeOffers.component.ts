import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from '../../company-projects/shared/offer.service';
import { FreeLancerService } from 'src/app/Freelancer/FreeLancer.service';
import { CompanyService } from '../../creat_company/Company.service';
import { Offer } from './offerdata.model';

@Component({
  selector: 'seeOffer',
  templateUrl: './seeOffers.component.html',
  styleUrls: ['./seeOffers.component.css'],
})
export class SeeOfferscomponent implements OnInit {
  freelancerList;
  offer:any
  Offers:Offer[]
  free:any
  constructor(private router:Router,private companysevices:CompanyService, private Offersevices:OfferService,private Freeservices:FreeLancerService) {}

  ngOnInit(): void {
    console.log(this.companysevices.CompanyID)
this.Offersevices.getofferscompany(this.companysevices.CompanyID).subscribe((data)=>{
this.offer=data
this.Offers=this.offer.offers
for(let j=0;j<this.offer.offers.length;j++){
this.Offers[j]._id=this.offer.offers[j]._id;
this.Offers[j].name=this.offer.offers[j].name;
this.Offers[j].dueto=this.offer.offers[j].dueto;
this.Offers[j].status=this.offer.offers[j].status;
this.Offers[j].freelancers=this.offer.offers[j].freelancers;
for(let i=0;i<this.Offers[j].freelancers.length;i++){
this.Freeservices.getone(this.Offers[j].freelancers[i]).subscribe((data)=>{
this.free=data;
console.log(data)
this.Offers[j].freelancers[i]=this.free.free
})}
}
})
  }

  accepted(offer:any,freelancer:any){
    this.Offersevices.approveForFreeLancer(offer._id,freelancer._id,this.companysevices.CompanyID).subscribe((data)=>{
console.log(data)
    })

  }
}
