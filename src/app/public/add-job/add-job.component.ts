import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OfferService } from 'src/app/Company/company-projects/shared/offer.service';
import { CompanyService } from 'src/app/Company/creat_company/Company.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css'],
})
export class AddJobComponent implements OnInit {
  constructor(private Offerservice:OfferService,private Companyservice:CompanyService) {}

  ngOnInit() {}

  onAddJob(form: NgForm) {
    if (form.value.title && form.value.description && form.value.endDate) {
      //call api to add them to backend
    this.Offerservice.PostNewOffer(form.value.title,form.value.endDate,form.value.description,this.Companyservice.CompanyID).subscribe()
      console.log(' mia san mia', form.value.title, form.value.description,form.value.endDate);
      form.resetForm();
    } else alert('Title and Description required');
  }
}
