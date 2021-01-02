import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  TaskList: any[];
  private TaskListUpdated=new Subject<any[]>();

  constructor(private http: HttpClient) { }

 PostNewOffer(name:string,dueto:string,description:string,companyId:string) {//company posts an offer
    return this.http
      .post(
        'http://localhost:3000/api/Offer',{name,dueto,companyId,description}
      )
  }

getoffersfreeLancer(){//free lancer see offers
  return this.http
  .get('http://localhost:3000/api/Offer')
}
getofferscompany(id:string){//get offers created by one company
  return this.http
  .get('http://localhost:3000/api/Offer/'+id)
}
applyForOffer(id:string,freelancerID:string){
  return this.http
  .post('http://localhost:3000/api/freeOffer/apply',{id,freelancerID})
}
approveForFreeLancer(OfferID:string,freelancerID:string,CompanyID){
  return this.http
  .post('http://localhost:3000/api/freeOffer/approved',{OfferID,freelancerID,CompanyID})
}
getapproveroffersforfreelancer(freelancerID:string){

  return this.http
  .post('http://localhost:3000/api/freeOffer/getoffers',{freelancerID})

}


}
